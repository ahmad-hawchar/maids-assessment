import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
const providers = [
  HttpClientModule,
  // ...other providers from appConfig if any
  ...appConfig.providers
];
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
