import { Environment } from '@abp/ng.core';

const baseUrl = 'https://localhost:4200';
const backendUrl = 'https://localhost:44363';

export const environment = {
  production: false,
  application: {
    baseUrl,
    backendUrl,
    name: 'Ppm',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44363',
    redirectUri: baseUrl,
    clientId: 'ABP_Addin',
    dummyClientSecret: '1q2w3e*',
    responseType: 'code',
    scope: 'offline_access Ppm',
  },
  apis: {
    default: {
      url: 'https://localhost:44363',
      rootNamespace: 'Desertfire.Ppm',
    },
  },
} as Environment;
