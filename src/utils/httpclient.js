'use client';

import axios from 'axios';

export const cmsApi = axios.create({
  baseURL: '/',
});
