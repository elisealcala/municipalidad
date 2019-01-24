import { NgModule } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContraloriaComponent } from './components/contraloria/contraloria.component';
import { GastoComponent } from './components/gasto/gasto.component';
import { InformanteComponent } from './components/informante/informante.component';
import { AboutComponent } from './components/about/about.component';

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
    path: 'about',
    component: AboutComponent,
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
