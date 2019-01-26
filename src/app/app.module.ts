import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContraloriaComponent } from './components/contraloria/contraloria.component';
import { DataService } from './services/data.service';
import { GastoComponent } from './components/contraloria/gasto/gasto.component';
import { InformanteComponent } from './components/informante/informante.component';
import { AboutComponent } from './components/about/about.component';
import { AnimationsService } from './services/animation.service';
import { HelpComponent } from './components/help/help.component';
import { TNSCheckBoxModule } from 'nativescript-checkbox/angular';

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule, TNSCheckBoxModule],
  declarations: [
    AppComponent,
    HomeComponent,
    ContraloriaComponent,
    GastoComponent,
    InformanteComponent,
    AboutComponent,
    HelpComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [DataService, AnimationsService],
})
export class AppModule {}
