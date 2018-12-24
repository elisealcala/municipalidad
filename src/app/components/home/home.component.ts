import { Component, OnInit } from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';
@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id
})
export class HomeComponent implements OnInit {
  public sections = [
    {
      title: 'Boton S.O.S',
      description: 'Botón de emergencia'
    },
    {
      title: 'Acerca de La Molina',
      description: 'Entérate más sobra La Molina'
    },
    {
      title: 'Contraloría Vecinal',
      description: 'Espacio para ver los gastos de la municipalidad'
    },
    {
      title: 'Quejas y Sugerencias',
      description: 'Déjanos tus'
    },
    {
      title: 'Datos Útiles',
      description: 'Listado de datos útiles'
    },
    {
      title: 'Boton S.O.S',
      description: 'Botón de emergencia'
    },
    {
      title: 'Acerca de La Molina',
      description: 'Entérate más sobra La Molina'
    },
    {
      title: 'Contraloría Vecinal',
      description: 'Espacio para ver los gastos de la municipalidad'
    },
    {
      title: 'Quejas y Sugerencias',
      description: 'Déjanos tus'
    },
    {
      title: 'Datos Útiles',
      description: 'Listado de datos útiles'
    },
    {
      title: 'Boton S.O.S',
      description: 'Botón de emergencia'
    },
    {
      title: 'Acerca de La Molina',
      description: 'Entérate más sobra La Molina'
    },
    {
      title: 'Contraloría Vecinal',
      description: 'Espacio para ver los gastos de la municipalidad'
    },
    {
      title: 'Quejas y Sugerencias',
      description: 'Déjanos tus'
    },
    {
      title: 'Datos Útiles',
      description: 'Listado de datos útiles'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
