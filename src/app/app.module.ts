import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

//Configuración del locale de la app
import localeEsCO from '@angular/common/locales/es-CO';
import localeFrCA from '@angular/common/locales/fr-CA';

import {registerLocaleData} from '@angular/common' // Función que sirve para estableceren angular el localeEsCO


registerLocaleData(localeEsCO); // Se registra el localeEsCO para toda la app
registerLocaleData(localeFrCA); // Se registra el localeFrCA para toda la app

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [{
    provide: LOCALE_ID, useValue: 'es-CO' // Servicio / Inyección para decirle a angular que coloque este idioma por defecto en toda la app
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
