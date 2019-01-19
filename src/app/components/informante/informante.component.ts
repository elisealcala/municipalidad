import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import { registerElement } from 'nativescript-angular/element-registry';
import { RouterExtensions } from 'nativescript-angular/router';
import { CardView } from 'nativescript-cardview';
import { defer, interval, animationFrameScheduler } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

const timeElapsed = defer(() => {
  const start = animationFrameScheduler.now();
  return interval(1).pipe(map(() => Math.floor((Date.now() - start))));
});

export const durationForAnimation = (totalMs) => timeElapsed.pipe(map((elapsedMs: number) => elapsedMs / totalMs), takeWhile(t => t <= 1));
export const amount = (d) => (t) => t * d;
export const elasticOut = (t) => Math.sin(-13.0 * (t + 1.0) * Math.PI / 2) * Math.pow(2.0, -10.0 * t) + 1.0;

@Component({
  selector: 'ns-informante',
  templateUrl: './informante.component.html',
  styleUrls: ['./informante.component.css'],
  moduleId: module.id,
})
export class InformanteComponent implements OnInit {

  public reports = [
    {
      title: 'Limpieza Pública',
      icon: '\uf66f',
    },
    {
      title: 'Seguridad Vial',
      icon: '\uf66f',
    },
    {
      title: 'Parques y Jardines',
      icon: '\uf66f',
    },
    {
      title: 'Veredas y Pistas',
      icon: '\uf66f',
    },
    {
      title: 'Ruidos Molestos',
      icon: '\uf66f',
    },
    {
      title: 'Iluminación',
      icon: '\uf66f',
    }
  ]


  constructor(page: Page, private router: RouterExtensions) {
    page.actionBarHidden = true;
  }

  ngOnInit() {
    registerElement('CardView', () => CardView);
  }

  public onTap(lbl: StackLayout) {
    durationForAnimation(2000).pipe(map(elasticOut), map(amount(50))).subscribe((heightValue) => {
      lbl.style.height = heightValue;
    });
  }


  public goBack() {
    this.router.back();
  }
}
