import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { request, HttpResponse } from 'tns-core-modules/http';
import { Page } from 'tns-core-modules/ui/page/page';
import { DataService } from '../../services/data.service';
import { Gasto } from '../../models';

@Component({
  selector: 'ns-contraloria',
  templateUrl: './contraloria.component.html',
  moduleId: module.id,
})
export class ContraloriaComponent implements OnInit {
  public gastos = [];
  public isBusy = true;
  public title: string;
  public contraloriaDetail = 'Espacio donde ver los gastos de la municipalidad';
  public currentPage = 0;

  constructor(page: Page, private angRouter: Router, private router: RouterExtensions, private data: DataService) {
    page.actionBarHidden = true;
    angRouter.events.forEach(event => {
      if (event instanceof NavigationEnd) {
        this.data.currentTitle.subscribe(title => (this.title = title));
      }
    });
  }

  public ngOnInit() {
    console.log(this.router.router.url);
    this.data.currentTitle.subscribe(title => (this.title = title));
    this.data.setCurrentPage(1);
    this.currentPage = this.data.currentPage;
    request({
      url: 'https://consulta-amigable-apirest.herokuapp.com/api/gastos/1',
      method: 'GET',
    }).then((response: HttpResponse) => {
      const str = response.content.toJSON();
      this.gastos = str.filter((s, i) => i !== 0);
      this.isBusy = false;
    });
  }

  public formatMoney(number: number) {
    return `S./ ${number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
  }

  public goToExpense(gasto: Gasto) {
    this.data.changeTitle(gasto.nombre);
    this.data.changeData(gasto);
    this.data.nextPage();
    this.router.navigate(['gasto', gasto.id]);
  }

  public goBack() {
    this.router.back();
  }
}
