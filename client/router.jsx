'use client';

import { use, useEffect } from 'react';

import { createFromFetch } from 'react-server-dom-webpack/client';

import { cmsApi } from './utils/httpclient';

const cache = new Map();

export function Router({ module }) {
  useEffect(() => () => {
    cache.delete(module)
  }, [module])

  if (!cache.has(module)) {
    cache.set(module, createFromFetch(cmsApi.put('/react', { module }, {
      responseType: 'blob',
    }).then(({ data }) => ({
      body: data.stream(),
    }))));
  }

  return <>
    {use(cache.get(module))}
  </>
}
