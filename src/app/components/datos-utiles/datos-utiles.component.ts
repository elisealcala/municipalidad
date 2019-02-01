import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { GestureEventData } from 'tns-core-modules/ui/gestures';

@Component({
  selector: 'ns-datos-utiles',
  templateUrl: './datos-utiles.component.html',
  styleUrls: ['./datos-utiles.component.css'],
  moduleId: module.id,
})
export class DatosUtilesComponent implements OnInit {
  public information = [
    {
      title: '• Serenazgo',
      number: '207-3000\n313-4495',
    },
    {
      title: '• Fiscalización',
      number: '313-4444 (247)',
    },
    {
      title: '• Central Telf.',
      number: '313-4444',
    },
    {
      title: '• Emergencias',
      number: '105 PNP\n116 BOMBEROS',
    },
    {
      title: '• Comisarías',
      number: 'Santa Felicia 348-7213\n\nLaMolina 368-1871\n\nLasPraderas 987505934',
    },
    {
      title: '• Alórentas',
      number: '313-4444\n(323, 360, 361)',
    },
  ];

  constructor(private routerExtensions: RouterExtensions) {}

  public ngOnInit() {}

  public onTap(args: GestureEventData) {
    this.routerExtensions.back();
  }
}
