import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { GestureEventData } from 'tns-core-modules/ui/gestures';

@Component({
  selector: 'ns-alcalde',
  templateUrl: './alcalde.component.html',
  styleUrls: ['./alcalde.component.css'],
  moduleId: module.id,
})
export class AlcaldeComponent implements OnInit {
  public title = 'Habla con el alcalde';

  constructor(private routerExtensions: RouterExtensions) {}

  public ngOnInit() {}

  public onTap(args: GestureEventData) {
    this.routerExtensions.back();
  }
}
