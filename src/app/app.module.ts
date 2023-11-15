import { NgModule } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './web/inicio/inicio.component';
import { CalendarComponent } from './web/calendar/calendar.component';

import { NgIconsModule } from '@ng-icons/core';
import { heroUsers } from '@ng-icons/heroicons/outline';
import { NgIcon } from '@ng-icons/core';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroMagnifyingGlass, heroUser } from '@ng-icons/heroicons/outline';
import { PatrocinateComponent } from './web/patrocinate/patrocinate.component';
import { SoporteComponent } from './web/soporte/soporte.component';

import { FloatLabelType, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    RouterModule.forRoot(appRoutes),
    [NgOptimizedImage],
    NgIconsModule.withIcons({ heroMagnifyingGlass, heroUser }),
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
