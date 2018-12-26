import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContraloriaComponent } from './components/contraloria/contraloria.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    // children: [
    //   {
    //     path: 'contraloria',
    //     component: ContraloriaComponent
    //   }
    // ]
  },
  {
    path: 'contraloria',
    component: ContraloriaComponent,
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
