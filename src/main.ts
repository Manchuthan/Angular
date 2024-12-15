import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // This should match the path to app.module.ts

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
