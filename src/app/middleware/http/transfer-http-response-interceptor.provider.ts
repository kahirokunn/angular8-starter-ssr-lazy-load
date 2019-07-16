import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TransferHttpResponseInterceptor } from './interceptor/transfer-http-response.interceptor';

export const TransferHttpResponseInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: TransferHttpResponseInterceptor,
  multi: true
}
