import axios from 'axios';

import { api, apiKeyInternal } from '@/server/config';
import '@/server/../_mock/back';

export const backendApi = axios.create({
  baseURL: api,
  headers: {
    'X-API-KEY': apiKeyInternal,
  },
});
