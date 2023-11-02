import { NgModule } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [NgOptimizedImage],
    NgIconsModule.withIcons({ heroMagnifyingGlass, heroUser }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
