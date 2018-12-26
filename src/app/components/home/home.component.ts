import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id
})
export class HomeComponent implements OnInit {
  
  constructor(private router: Router, page: Page) {
    page.actionBarHidden = true;
  }

  ngOnInit() {}

  public navigateToCategory() {
    this.router.navigate(['contraloria']);
  }

}
