import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { GestureEventData } from 'tns-core-modules/ui/gestures';

@Component({
  selector: 'ns-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
  moduleId: module.id,
})
export class ServiceComponent implements OnInit {
  public id;
  public title = {
    1: 'Limpieza Pública',
    2: 'Seguridad Vial',
    3: 'Parques y Jardines',
    4: 'Veredas y Pistas',
    5: 'Ruidos Molestos',
    6: 'Iluminación',
  };

  constructor(private route: ActivatedRoute, private routerExtensions: RouterExtensions) {
    route.params.subscribe(params => {
      this.id = params.id;
    });
  }

  public ngOnInit() {}

  public onTap(args: GestureEventData) {
    this.routerExtensions.back();
  }
}
