import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Provider } from '@angular/core';
import { ParticipantsInterceptor } from '../interceptors/participants.interceptor';
import { TypeInterceptor } from '../interceptors/type.interceptor';

export const httpInterceptorProviders: Provider[] = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ParticipantsInterceptor,
    multi: true,
  },
  { provide: HTTP_INTERCEPTORS, useClass: TypeInterceptor, multi: true },
];
