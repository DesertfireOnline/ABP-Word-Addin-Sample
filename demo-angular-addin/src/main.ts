import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
declare var Office:any;
if (environment.production) {
  enableProdMode();
}
declare var replaceStateRef, pushStateRef;

function patch() {
  if (history && !history.pushState) {
    history.pushState = pushStateRef;
    history.replaceState = replaceStateRef;
  }
}

function initApp(reason?) {
  patch();
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
}

Office.initialize = initApp;

Office.onReady(() => {
  // If needed, Office.js is ready to be called
  console.log('commands are ready!');
  if (!Office.context || !Object.keys(Office.context).length) {
    console.log('init browser');
    initApp()
  }

});
