import { BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { transferHttpResponseInterceptorProvider } from './transfer-http-response/transfer-http-response-interceptor.provider';


@NgModule({
  imports: [
    BrowserTransferStateModule,
  ],
  providers: [
    transferHttpResponseInterceptorProvider,
  ],
})
export class TransferHttpResponseModule { }
