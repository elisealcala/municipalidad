import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContraloriaComponent } from './components/contraloria/contraloria.component';
import { GastoComponent } from './components/gasto/gasto.component';

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
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
