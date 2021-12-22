import { InjectionToken, Provider } from '@angular/core';

export const APP_NAME_TOKEN = new InjectionToken('App name');
export const APP_NAME = 'Multi Providers Examples';

export const appNameProvider: Provider = {
  provide: APP_NAME_TOKEN,
  useValue: APP_NAME,
};
