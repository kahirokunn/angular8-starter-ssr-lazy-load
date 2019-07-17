import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UniversalInterceptor } from './universal.interceptor';
import { Provider } from '@angular/core';

export const universalInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: UniversalInterceptor,
  multi: true
};
