import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  public send = false;
  public confirmation =
    'Su pedido de auxilio y su ubicación han sido enviados con éxito, en breve nos contactaremos con usted';

  @ViewChild('secondTextFieldId') public secondTextFieldId: ElementRef;

  constructor(private page: Page, private routerExtensions: RouterExtensions) {
    // page.backgroundColor = '#070C1C';
    page.backgroundSpanUnderStatusBar = true;
    page.actionBarHidden = false;
  }

  public ngOnInit() {
    this.startTimer();
  }

  public startTimer() {
    this.interval = setInterval(() => {
      console.log(this.timeLeft);
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.pauseTimer();
        this.secondTextFieldId.nativeElement.focus();
      }
    }, 1000);
  }

  public onTap(args: GestureEventData) {
    this.routerExtensions.back();
  }

  public sendInformation() {
    this.send = true;
  }

  public pauseTimer() {
    clearInterval(this.interval);
  }
}
