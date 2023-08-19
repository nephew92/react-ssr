'use client';

import { createContext, startTransition, useContext, useState, use } from 'react';

import { createFromFetch, createFromReadableStream } from 'react-server-dom-webpack/client';

import "./sass/bootstrap.scss"
import { cmsApi } from './utils/httpclient';

const RouterContext = createContext();
const initialCache = new Map();

export function Router() {
  const [cache, setCache] = useState(initialCache);
  const [location, setLocation] = useState({
    selectedId: null,
    isEditing: false,
    searchText: '',
  });

  const locationKey = JSON.stringify(location);
  let content = cache.get(locationKey);
  if (!content) {
    content = createFromFetch(cmsApi.put('/react', location, {
      responseType: 'blob',
    }).then(({ data }) => ({
      body: data.stream(),
    })),
    );
    cache.set(locationKey, content);
  }

  function refresh(response) {
    startTransition(() => {
      const nextCache = new Map();
      if (response != null) {
        const locationKey = response.headers.get('X-Location');
        const nextLocation = JSON.parse(locationKey);
        const nextContent = createFromReadableStream(response.body);
        nextCache.set(locationKey, nextContent);
        navigate(nextLocation);
      }
      setCache(nextCache);
    })
  }

  function navigate(nextLocation) {
    startTransition(() => {
      setLocation(prevLocation => ({
        ...prevLocation,
        ...nextLocation,
      }));
    });
  }

  return <RouterContext.Provider value={{ location, navigate, refresh }}>
    {use(content)}
  </RouterContext.Provider>
}

export function useRouter() {
  return useContext(RouterContext);
}

export function useMutation({ endpoint, method }) {
  const { refresh } = useRouter();
  const [isSaving, setIsSaving] = useState(false);
  const [didError, setDidError] = useState(false);
  const [error, setError] = useState(null);
  if (didError) {
    // Let the nearest error boundary handle errors while saving.
    throw error;
  }

  async function performMutation(payload, requestedLocation) {
    setIsSaving(true);
    try {
      const response = await fetch(
        `${endpoint}?location=${encodeURIComponent(
          JSON.stringify(requestedLocation),
        )}`,
        {
          method,
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (!response.ok) {
        throw new Error(await response.text());
      }
      refresh(response);
    } catch (e) {
      setDidError(true);
      setError(e);
    } finally {
      setIsSaving(false);
    }
  }

  return [isSaving, performMutation];
}
