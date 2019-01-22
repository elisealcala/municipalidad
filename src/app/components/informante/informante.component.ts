import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
// import { registerElement } from 'nativescript-angular/element-registry';
import { RouterExtensions } from 'nativescript-angular/router';
// import { CardView } from 'nativescript-cardview';
import { ScrollEventData } from 'tns-core-modules/ui/scroll-view';
import { defer, interval, animationFrameScheduler } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

const timeElapsed = defer(() => {
  const start = animationFrameScheduler.now();
  return interval(1).pipe(map(() => Math.floor(Date.now() - start)));
});

const durationForAnimation = totalMs =>
  timeElapsed.pipe(
    map((elapsedMs: number) => elapsedMs / totalMs),
    takeWhile(t => t <= 1),
  );
const amount = (d, h) => t => {
  if (d * ((h / d) * t) < h - d) {
    return h - d * ((h / d) * t);
  }
};
// const elasticOut = t => Math.sin((-13.0 * (t + 1.0) * Math.PI) / 2) * Math.pow(2.0, -10.0 * t) + 1.0;

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
    },
    {
      title: 'Ruidos Molestos',
      icon: '\uf66f',
    },
    {
      title: 'Iluminación',
      icon: '\uf66f',
    },
  ];

  public status = 'not scrolling';
  public isHide = false;

  constructor(page: Page, private router: RouterExtensions) {
    page.actionBarHidden = true;
  }

  public ngOnInit() {
    // registerElement('CardView', () => CardView);
  }

  public onScroll(args: ScrollEventData, lbl: StackLayout) {
    this.status = 'scrolling';

    setTimeout(() => {
      this.status = 'not scrolling';
    }, 300);

    if (args.scrollY > 0 && args.scrollY < 125 && !this.isHide) {
      durationForAnimation(500)
        .pipe(
          // map(elasticOut),
          map(amount(56, 170)),
        )
        .subscribe(heightValue => {
          lbl.style.height = heightValue;
          this.isHide = true;
        });
    }
  }

  public goBack() {
    this.router.back();
  }
}
