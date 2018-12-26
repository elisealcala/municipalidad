import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-contraloria',
  templateUrl: './contraloria.component.html',
  moduleId: module.id
})
export class ContraloriaComponent implements OnInit {

  constructor(page: Page) {
    page.actionBarHidden = true;
  }

  ngOnInit() { }
}
