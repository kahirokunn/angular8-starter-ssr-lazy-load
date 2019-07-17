import { NgModule } from '@angular/core';
import { universalInterceptorProvider } from './universal-interceptor/universal-interceptor.provider';


@NgModule({
  providers: [
    universalInterceptorProvider
  ],
})
export class UniversalInterceptorModule { }
