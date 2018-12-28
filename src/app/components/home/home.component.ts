import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from 'tns-core-modules/ui/page/page';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id
})
export class HomeComponent implements OnInit {
  
  constructor(private router: Router, page: Page, private data: DataService) {
    page.actionBarHidden = true;
  }

  ngOnInit() {}

  public navigateToCategory() {
    this.data.changeTitle('Contraloría Vecinal')
    this.router.navigate(['contraloria']);
  }

}
