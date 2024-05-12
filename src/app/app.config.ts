import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { appReducers } from './store/app.reducer';
import { provideEffects } from '@ngrx/effects';
import { searchNoteEffect } from './store/Notes/state/notes.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    provideStore(appReducers),
    provideEffects({ searchNoteEffect })
  ]
};
