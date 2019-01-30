import { NgModule } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContraloriaComponent } from './components/contraloria/contraloria.component';
import { GastoComponent } from './components/contraloria/gasto/gasto.component';
import { InformanteComponent } from './components/informante/informante.component';
import { AboutComponent } from './components/about/about.component';
import { HelpComponent } from './components/help/help.component';
import { ServiceComponent } from './components/informante/service/service.component';
import { AlcaldeComponent } from './components/alcalde/alcalde.component';
import { DatosUtilesComponent } from './components/datos-utiles/datos-utiles.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'contraloria',
    component: ContraloriaComponent,
  },
  {
    path: 'gasto/:id',
    component: GastoComponent,
  },
  {
    path: 'informante',
    component: InformanteComponent,
  },
  {
    path: 'service/:id',
    component: ServiceComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'help',
    component: HelpComponent,
  },
  {
    path: 'alcalde',
    component: AlcaldeComponent,
  },
  {
    path: 'datos-utiles',
    component: DatosUtilesComponent,
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {
  constructor(private router: Router) {
    // override the route reuse strategy
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }
}
