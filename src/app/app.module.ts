import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './web/inicio/inicio.component';
import { CalendarComponent } from './web/calendar/calendar.component';
import { PatrocinateComponent } from './web/patrocinate/patrocinate.component';
import { SoporteComponent } from './web/soporte/soporte.component';
import { MaterialModule } from './material-module';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'calendario', component: CalendarComponent },
  { path: 'patrocinate', component: PatrocinateComponent },
  { path: 'soporte', component: SoporteComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    CalendarComponent,
    PatrocinateComponent,
    SoporteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
