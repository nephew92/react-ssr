'use client';

import { use, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { createFromFetch } from 'react-server-dom-webpack/client';

import { cmsApi } from './utils/httpclient';

const initial = new Map()
export function Router({ module, ...props }) {
  const [cache] = useState(initial);
  const { pathname } = useLocation();

  useEffect(() => () => {
    cache.delete(module)
  }, [module, cache])

  if (!cache.has(module)) {
    cache.set(module, createFromFetch(cmsApi.put('/react', { module, location: pathname, props }, {
      responseType: 'blob',
    }).then(({ data }) => ({
      body: data.stream(),
    }))));
  }

  return <>
    {use(cache.get(module))}
  </>
}
