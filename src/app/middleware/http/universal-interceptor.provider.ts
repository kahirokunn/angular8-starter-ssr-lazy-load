import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UniversalInterceptor } from './interceptor/universal.interceptor';

export const universalInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: UniversalInterceptor,
  multi: true
}
