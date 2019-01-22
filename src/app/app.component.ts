import { Component, OnInit } from '@angular/core';
import { CardView } from 'nativescript-cardview';
import { registerElement } from 'nativescript-angular/element-registry';

@Component({
  moduleId: module.id,
  selector: 'ns-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  public ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    registerElement('CardView', () => CardView);
  }
}
