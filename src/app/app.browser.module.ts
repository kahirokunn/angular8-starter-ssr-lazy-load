import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from '@/app/middleware/routing/routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { AppComponent } from './app.component';
import { PrebootModule } from 'preboot';
import { ServerTransition } from '@/app/middleware/serverTransition/server-transition.module';
import { universalInterceptorProvider } from './middleware/http/universal-interceptor.provider';
import { TransferHttpResponseInterceptorProvider } from './middleware/http/transfer-http-response-interceptor.provider';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TransferHttpCacheModule,
    ServerTransition.forRoot({ appId: 'universal' }),
    PrebootModule.withConfig({ appRoot: 'app-root' }),
    RoutingModule,
    HttpClientModule,
  ],
  providers: [
    universalInterceptorProvider,
    TransferHttpResponseInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppBrowserModule { }
