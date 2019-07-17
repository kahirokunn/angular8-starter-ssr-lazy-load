import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TransferHttpResponseInterceptor } from './transfer-http-response.interceptor';
import { Provider } from '@angular/core';

export const transferHttpResponseInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: TransferHttpResponseInterceptor,
  multi: true
};
