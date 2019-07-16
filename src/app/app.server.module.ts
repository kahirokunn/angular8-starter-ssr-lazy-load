import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppBrowserModule } from '@/app/app.browser.module';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppComponent } from './app-module/component/app.component';

@NgModule({
  imports: [
    AppBrowserModule,
    ServerModule,
    ModuleMapLoaderModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule { }
