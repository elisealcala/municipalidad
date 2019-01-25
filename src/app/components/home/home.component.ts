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
      title: 'Contraloría Vecinal',
      description: 'Espacio para ver los gastos de la municipalidad',
      icon: '\uf4c0',
      route: '../contraloria',
    },
    {
      title: 'Quejas y Sugerencias',
      description: 'Déjanos tus sugerencias',
      icon: '\uf128',
    },
    {
      title: 'Datos Útiles',
      description: 'Teléfonos y datos importantes',
      icon: '\uf129',
    },
    {
      title: 'Informante',
      description: 'Informa sobre los servicios',
      icon: '\uf06e',
      route: '../informante',
    },
  ];

  constructor(private router: Router, page: Page, private data: DataService) {}

  public ngOnInit() {}

  public navigateToCategory() {
    this.data.changeTitle('Contraloría Vecinal');
    this.router.navigate(['contraloria']);
  }
}
