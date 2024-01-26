import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
bootstrapApplication(AppComponent, {
  providers: [provideStore(), ...appConfig.providers]
})
  .catch((err) => console.error(err));