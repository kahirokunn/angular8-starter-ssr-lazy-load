import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppBrowserModule } from '@/app/app.browser.module';
import { environment } from '@/environments/environment';

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    console.log('boot app')
    platformBrowserDynamic()
      .bootstrapModule(AppBrowserModule)
      .catch(err => console.error(err));
  }, 2000)
});

document.addEventListener('PrebootComplete', () => {
  console.log("initialized app")
})
