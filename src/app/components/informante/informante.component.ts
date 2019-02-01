import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { request, HttpResponse } from 'tns-core-modules/http';
import { AnimationsService } from '../../services/animation.service';
import { AnimationCurve } from 'tns-core-modules/ui/enums';
import { View } from 'tns-core-modules/ui/core/view';
import { ScrollEventData } from 'tns-core-modules/ui/scroll-view';
import { GestureEventData } from 'tns-core-modules/ui/gestures';

@Component({
  selector: 'ns-informante',
  templateUrl: './informante.component.html',
  styleUrls: ['./informante.component.css'],
  moduleId: module.id,
})
export class InformanteComponent implements OnInit {
  public static IMAGE_MIN_HEIGHT = 48;
  public reports = [
    {
      title: 'Limpieza Pública',
      icon: '\uf51a',
      id: 1,
    },
    {
      title: 'Seguridad Vial',
      icon: '\uf637',
      id: 2,
    },
    {
      title: 'Parques y Jardines',
      icon: '\uf1bb',
      id: 3,
    },
    {
      title: 'Veredas y Pistas',
      icon: '\uf018',
      id: 4,
    },
    {
      title: 'Ruidos Molestos',
      icon: '\uf027',
      id: 5,
    },
    {
      title: 'Iluminación',
      icon: '\uf0eb',
      id: 6,
    },
    {
      title: 'Comercio Ambulatorio Informal',
      icon: '\uf1bb',
      id: 7,
    },
    {
      title: 'Violencia Familiar',
      icon: '\uf018',
      id: 8,
    },
    {
      title: 'Consumo de alcohol y drogas',
      icon: '\uf027',
      id: 9,
    },
    {
      title: 'Maleza',
      icon: '\uf0eb',
      id: 10,
    },
  ];
  @Input() public offset: number;
  @Input() public imageOpacity: number = 1;
  @Input() public dockedLabelOpacity: number = 0;
  @Input() public dockedLabelTextOpacity: number = 0;
  @ViewChild('imageContainer') public imageContainerRef: ElementRef;
  @ViewChild('image') public imageRef: ElementRef;
  @ViewChild('title') public titleRef: ElementRef;

  constructor(private animationsService: AnimationsService, private routerExtensions: RouterExtensions) {
    this.offset = this.animationsService.getAnimationOffset;
    request({
      url: 'http://190.223.43.174:8080/lamolina/api/tipoInformes',
      method: 'GET',
    }).then((response: HttpResponse) => {
      const str = response.content.toJSON();
      console.log(str);
      this.reports = str;
    });
  }

  public animateIn(view: View, duration: number, delay: number) {
    view
      .animate({
        scale: { x: 1, y: 1 },
        translate: { x: 0, y: 0 },
        duration,
        delay,
        curve: AnimationCurve.easeOut,
      })
      .catch(() => {});
  }

  public animateOut(view: View) {
    view
      .animate({
        opacity: 0,
        duration: 200,
      })
      .catch(() => {});
  }

  public onScroll(args: ScrollEventData) {
    const imageContainer = this.imageContainerRef.nativeElement;

    const offset = args.scrollY < 0 ? 0 : args.scrollY;
    const imageHeight = imageContainer.getActualSize().height;

    this.applyImageTransition(offset, imageHeight);
    this.applyTitleTransition(offset, imageHeight);
    this.applyDockHeaderTransition(offset, imageHeight);
  }

  public onTap(args: GestureEventData) {
    this.routerExtensions.back();
  }

  public ngOnInit() {}

  private applyImageTransition(scrollOffset: number, imageHeight: number) {
    const imageContainer = this.imageContainerRef.nativeElement;
    const image = this.imageRef.nativeElement;
    const imageHeightMaxChange = imageHeight - InformanteComponent.IMAGE_MIN_HEIGHT;

    imageContainer.translateY = scrollOffset / 1.5;
    image.scaleX = 1 + scrollOffset / imageHeightMaxChange;
    image.scaleY = 1 + scrollOffset / imageHeightMaxChange;
    this.imageOpacity = 1 - scrollOffset / imageHeightMaxChange;
  }

  private applyTitleTransition(scrollOffset: number, imageHeight: number) {
    const imageHeightMaxChange = imageHeight - InformanteComponent.IMAGE_MIN_HEIGHT;
    const title = this.titleRef.nativeElement;

    if (imageHeightMaxChange < scrollOffset) {
      title.translateX = -(scrollOffset - imageHeightMaxChange) / 1.2;
      title.translateY = -(scrollOffset - imageHeightMaxChange) * 2;
      title.scaleX = 1 - (scrollOffset - imageHeightMaxChange) / imageHeight;
      title.scaleY = 1 - (scrollOffset - imageHeightMaxChange) / imageHeight;
    } else {
      title.translateX = 0;
      title.translateY = 0;
      title.scaleX = 1;
      title.scaleY = 1;
    }
  }

  private applyDockHeaderTransition(scrollOffset: number, imageHeight: number) {
    this.dockedLabelOpacity = this.imageOpacity <= 0 ? 1 : 0;
    this.dockedLabelTextOpacity =
      (scrollOffset - (imageHeight - InformanteComponent.IMAGE_MIN_HEIGHT)) / InformanteComponent.IMAGE_MIN_HEIGHT -
      0.2;
  }

  private goToService(id) {
    this.routerExtensions.navigate(['service', id]);
  }
}
