import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Provider } from '@angular/core';
import { ParticipantsInterceptor } from '../interceptors/participants.interceptor';
import { TypeInterceptor } from '../interceptors/type.interceptor';

const httpInterceptors = [ParticipantsInterceptor, TypeInterceptor];

export const httpInterceptorProviders: Provider[] = httpInterceptors.map(
  (interceptor) => ({
    provide: HTTP_INTERCEPTORS,
    useClass: interceptor,
    multi: true,
  })
);
