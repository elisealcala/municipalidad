import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { request, HttpResponse } from "tns-core-modules/http";
import { Page } from 'tns-core-modules/ui/page/page';
import { DataService } from '../../services/data.service';
import { Gasto } from '../../models';

@Component({
  selector: 'ns-contraloria',
  templateUrl: './contraloria.component.html',
  moduleId: module.id
})
export class ContraloriaComponent implements OnInit {

  public gastos = [];
  public isBusy = true;
  public title: string;

  constructor(page: Page, private angRouter: Router, private router: RouterExtensions, private data: DataService) {
    page.actionBarHidden = true;
    angRouter.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this.data.currentTitle.subscribe(title => this.title = title);
      }
    });
  }

  ngOnInit() {
    this.data.currentTitle.subscribe(title => this.title = title);
    request({
      url: "https://consulta-amigable-apirest.herokuapp.com/api/gastos/1",
      method: "GET"
    }).then((response: HttpResponse) => {
      const str = response.content.toJSON();
      this.gastos = str.filter((s,i) => i !== 0);
      this.isBusy = false;
    });
  }

  public goToExpense(gasto: Gasto) {
    this.data.changeTitle(gasto.nombre);
    this.data.changeData(gasto);
    this.router.navigate(['gasto', gasto.id]);
  }

  public goBack() {
    this.router.back();
  }
}
