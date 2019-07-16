import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '@/app/app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from '@/app/app-module/component/app.component';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { PrebootModule } from 'preboot';
import { TransferHttpGetResponseInterceptor } from '@/app/core/http/interceptor/transfer-http-get-response.interceptor';
import { UniversalInterceptor } from '@/app/core/http/interceptor/universal.interceptor';
import { ServerTransition } from './core/serverTransition/server-transition.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ServerTransition.forRoot({ appId: 'universal' }),
    PrebootModule.withConfig({ appRoot: 'app-root' }),
    TransferHttpCacheModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UniversalInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TransferHttpGetResponseInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppBrowserModule { }
