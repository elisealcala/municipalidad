import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from 'tns-core-modules/ui/page/page';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id,
})
export class HomeComponent implements OnInit {
  public sections = [
    {
      title: 'Acerca de La Molina',
      description: 'Detalles del distrito de La Molina',
      icon: '\uf66f',
      route: '../about',
    },
    {
      title: 'TransparencITy',
      description: 'Espacio para ver los gastos de la municipalidad',
      icon: '\uf4c0',
      route: '../contraloria',
    },
    {
      title: 'Vecino Vigilante',
      description: 'Informa sobre los servicios',
      icon: '\uf06e',
      route: '../informante',
    },
    {
      title: 'Datos Útiles',
      description: 'Teléfonos y datos importantes',
      icon: '\uf129',
      route: '../datos-utiles',
    },
    {
      title: 'Habla con el alcalde',
      description: 'Déjanos tus sugerencias',
      icon: '\uf128',
      route: '../alcalde',
    },
    {
      title: 'Trámites Online',
      // description: 'Espacio para ver los gastos de la municipalidad',
      icon: '\uf4c0',
    },
    {
      title: 'Recojo Inteligente',
      // description: 'Informa sobre los servicios',
      icon: '\uf06e',
    },
    {
      title: 'Eco Recicla',
      // description: 'Teléfonos y datos importantes',
      icon: '\uf129',
    },
    {
      title: 'La Molina activate',
      // description: 'Déjanos tus sugerencias',
      icon: '\uf128',
    },
  ];

  constructor(private router: Router, page: Page, private data: DataService) {}

  public ngOnInit() {}

  public navigateToCategory() {
    this.data.changeTitle('Contraloría Vecinal');
    this.router.navigate(['contraloria']);
  }
}
