import axios from 'axios';

import { api, apiKeyInternal } from '@Server/config';
import '@Server/mock';

export const backendApi = axios.create({
  baseURL: api,
  headers: {
    'X-API-KEY': apiKeyInternal,
  },
});
