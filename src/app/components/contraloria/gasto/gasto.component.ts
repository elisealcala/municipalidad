import { Component, OnInit } from "@angular/core";
import { request, HttpResponse } from 'tns-core-modules/http';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { alert } from 'tns-core-modules/ui/dialogs';
import { DataService } from '../../../services/data.service';
import { Gasto } from '../../../models';

@Component({
  selector: 'ns-gasto',
  templateUrl: './gasto.component.html',
  moduleId: module.id
})
export class GastoComponent implements OnInit {
  public title: string;
  public id: number;
  public months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Setiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ];
  public trimesters = [
    'Primer Trimestre',
    'Segundo Trimestre',
    'Tercer Trimestre',
    'Cuarto Trimestre'
  ];
  public filterSelected = 'anual';
  public isBusy = true;
  public currentExpense: Gasto;
  public currentExpenseKeys = [];
  public gastos: [];
  public gastosMensuales: [];
  public currentPage = 1;
  public expensesInformation = {
    pia: 'Presupuesto Institucional de Apertura',
    pim: 'Presupuesto Institucional Modificado',
    devengado: 'Obligación adquirida que aún no ha sido abonada',
    girado: 'Obligación que ha sido pagada',
    avance: 'Avance del gasto presupuestal',
  };

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private angRouter: Router,
    public page: Page,
    private router: RouterExtensions,
  ) {
    page.actionBarHidden = true;
    this.currentPage = data.currentPage;
    const elem = ['id', 'nombre', 'descripcion', 'idRef'];
    route.params.subscribe(params => {
      this.id = params.id;
      request({
        url: `https://consulta-amigable-apirest.herokuapp.com/api/gastos/${this.id}`,
        method: 'GET',
      }).then((response: HttpResponse) => {
        const str = response.content.toJSON();
        console.log(str);
        this.currentExpense = str[0];
        this.title = this.currentExpense.nombre;
        this.gastos = str.filter((s, i) => i !== 0);
        this.isBusy = false;
        this.currentExpenseKeys = Object.keys(this.currentExpense).filter(c => !elem.includes(c));
        console.log(this.currentExpenseKeys);
      });
    });
  }

  public ngOnInit(): void {
    this.isBusy = true;
    const elem = ['id', 'nombre', 'descripcion', 'idRef'];
    this.route.params.subscribe(params => {
      this.id = params.id;
      request({
        url: `https://consulta-amigable-apirest.herokuapp.com/api/gastos/${this.id}`,
        method: 'GET',
      }).then((response: HttpResponse) => {
        const str = response.content.toJSON();
        console.log(str);
        this.currentExpense = str[0];
        this.title = this.currentExpense.nombre;
        this.gastos = str.filter((s, i) => i !== 0);
        this.isBusy = false;
        this.currentExpenseKeys = Object.keys(this.currentExpense).filter(c => !elem.includes(c));
        console.log(this.currentExpenseKeys);
      });
    });
  }

  public formatMoney(number: number) {
    return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }

  public getExpense(number: number, name: string) {
    if (name === 'avance') {
      return `${number} %`;
    }
    return `S/. ${this.formatMoney(number)}`;
  }

  public selectYear() {
    // this.isBusy = true;
    request({
      url: `https://consulta-amigable-apirest.herokuapp.com/api/gastos/${this.id}`,
      method: 'GET',
    }).then((response: HttpResponse) => {
      const str = response.content.toJSON();
      this.gastos = str.filter((s, i) => i !== 0);
      this.filterSelected = 'anual';
      // this.isBusy = false;
    });
  }

  public selectMonths() {
    // this.isBusy = true;
    request({
      url: `https://consulta-amigable-apirest.herokuapp.com/api/gastos/${this.id}/meses`,
      method: 'GET',
    }).then((response: HttpResponse) => {
      const str = response.content.toJSON();
      const monthsData = str.map((s, i) => ({
        month: this.months[i],
        devengado: s.devengado,
        girado: s.girado,
      }));
      this.gastosMensuales = monthsData;
      this.filterSelected = 'mensual';
      // this.isBusy = false;
    });
  }

  public selectTrimester() {
    // this.isBusy = true;
    request({
      url: `https://consulta-amigable-apirest.herokuapp.com/api/gastos/${this.id}/trimestres`,
      method: 'GET',
    }).then((response: HttpResponse) => {
      const str = response.content.toJSON();
      const trimesterData = str.map((s, i) => ({
        trimester: this.trimesters[i],
        devengado: s.devengado,
        girado: s.girado,
      }));
      this.gastosMensuales = trimesterData;
      this.filterSelected = 'trimestral';
      // this.isBusy = false;
    });
  }

  public openInformation(expense) {
    alert({
      title: `${expense.toUpperCase()}`,
      message: this.expensesInformation[expense],
      okButtonText: 'Listo',
    }).then(() => {
      console.log('Dialog closed!');
    });
  }

  public goToExpense(gasto: Gasto) {
    this.data.changeTitle(gasto.nombre);
    this.data.changeData(gasto);
    this.data.nextPage();
    this.router.navigate(['gasto', gasto.id], {});
  }

  public goBack() {
    this.router.back();
    this.data.backPage();
  }
}
