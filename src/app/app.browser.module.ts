import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from '@/app/middleware/routing/routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PrebootModule } from 'preboot';
import { ServerTransition } from '@/app/middleware/server-transition/server-transition.module';
import { TransferHttpResponseModule } from './middleware/http/transfer-http-response.module';
import { UniversalInterceptorModule } from './middleware/http/universal-interceptor.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,

    HttpClientModule,
    UniversalInterceptorModule,
    TransferHttpResponseModule,

    ServerTransition.forRoot({ appId: 'universal' }),
    PrebootModule.withConfig({ appRoot: 'app-root' }),
  ],
  bootstrap: [AppComponent]
})
export class AppBrowserModule { }
