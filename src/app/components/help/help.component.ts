import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { GestureEventData } from 'tns-core-modules/ui/gestures';

@Component({
  selector: 'ns-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css'],
  moduleId: module.id,
})
export class HelpComponent implements OnInit {
  public timeLeft: number = 3;
  public interval;

  constructor(page: Page, private routerExtensions: RouterExtensions) {
    page.actionBarHidden = true;
  }

  public ngOnInit() {
    this.startTimer();
  }

  public startTimer() {
    this.interval = setInterval(() => {
      console.log(this.timeLeft);
      if (this.timeLeft > 0) {
        this.timeLeft--;
      }
    }, 1000);
  }

  public onTap(args: GestureEventData) {
    this.routerExtensions.back();
  }

  public pauseTimer() {
    clearInterval(this.interval);
  }
}
