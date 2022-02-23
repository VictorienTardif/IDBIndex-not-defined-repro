import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import {environment} from "../environments/environment";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
      BrowserModule.withServerTransition({ appId: 'serverApp' }),
      provideFirebaseApp(() => initializeApp(environment.firebase))
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
