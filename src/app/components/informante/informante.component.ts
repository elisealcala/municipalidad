import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-informante',
  templateUrl: './informante.component.html',
  styleUrls: ['./informante.component.css'],
  moduleId: module.id,
})
export class InformanteComponent implements OnInit {

  public reports = [
    {
      title: 'Limpieza Pública',
      icon: '\uf66f',
    },
    {
      title: 'Seguridad Vial',
      icon: '\uf66f',
    },
    {
      title: 'Parques y Jardines',
      icon: '\uf66f',
    },
    {
      title: 'Veredas y Pistas',
      icon: '\uf66f',
    },
    {
      title: 'Ruidos Molestos',
      icon: '\uf66f',
    },
    {
      title: 'Iluminación',
      icon: '\uf66f',
    }
  ]


  constructor(page: Page, private router: RouterExtensions) {
    page.actionBarHidden = true;
  }

  ngOnInit() {
  }

  public goBack() {
    this.router.back();
  }
}
