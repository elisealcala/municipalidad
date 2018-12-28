import { Component, OnInit } from '@angular/core';
import { request, HttpResponse } from "tns-core-modules/http";
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'ns-gasto',
  templateUrl: './gasto.component.html',
  moduleId: module.id
})
export class GastoComponent implements OnInit {
  public title: string;
  public id: number;
  public gastos: [];

  constructor (
    private data: DataService,
    private route: ActivatedRoute,
    private angRouter: Router,
    public page: Page,
    private router: RouterExtensions,
  ) {
    page.actionBarHidden = true;
    angRouter.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this.data.currentTitle.subscribe(title => this.title = title);
      }
    });
  }

  ngOnInit(): void {
    this.data.currentTitle.subscribe(title => this.title = title);
    this.route.params.subscribe(params => {
      this.id = params.id;
      request({
        url: `https://consulta-amigable-apirest.herokuapp.com/api/gastos/${this.id}`,
        method: "GET"
      }).then((response: HttpResponse) => {
        const str = response.content.toJSON();
        this.gastos = str;
        console.log(this.gastos);
      });
    })
  }

  public goToExpense(id: number, name: string) {
    this.data.changeTitle(name);
    this.router.navigate(['gasto', id]);
  }

  public goBack() {
    this.router.back();
  }
}