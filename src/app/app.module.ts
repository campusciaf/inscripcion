import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


/* Idioma del proyecto */
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs, 'es');
/* ********************* */

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';

/* import para el slick */
import { SlickCarouselModule } from 'ngx-slick-carousel';
/* ************************ */

/* modulo parael multiselect */
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
/* ************************ */

import { HeaderComponent } from './componente/header/header.component';
import { FooterComponent } from './componente/footer/footer.component';
import { IniciarComponent } from './componente/inscripcion/iniciar/iniciar.component';
import { OndashboardComponent } from './componente/inscripcion/ondashboard/ondashboard.component';
import { OnloginComponent } from './componente/inscripcion/onlogin/onlogin.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IniciarComponent,
    OndashboardComponent,
    OnloginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
    
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' } /*idioma del proyecto */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
