import axios from 'axios';

import { api, apiKeyInternal } from '@Server/config';

export const internalApi = axios.create({
  baseURL: api,
  headers: {
    'X-API-KEY': apiKeyInternal,
  },
});
