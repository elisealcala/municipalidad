import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { AnimationsService } from '../../services/animation.service';
import { AnimationCurve } from 'tns-core-modules/ui/enums';
import { View } from 'tns-core-modules/ui/core/view';
import { ScrollEventData } from 'tns-core-modules/ui/scroll-view';
import { GestureEventData } from 'tns-core-modules/ui/gestures';

@Component({
  selector: 'ns-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  moduleId: module.id,
})
export class AboutComponent implements OnInit {
  public static IMAGE_MIN_HEIGHT = 48;
  @Input() public offset: number;
  @Input() public imageOpacity: number = 1;
  @Input() public dockedLabelOpacity: number = 0;
  @Input() public dockedLabelTextOpacity: number = 0;
  @ViewChild('imageContainer') public imageContainerRef: ElementRef;
  @ViewChild('image') public imageRef: ElementRef;
  @ViewChild('title') public titleRef: ElementRef;
  public description =
    'The default style looks like Figure 4: icons with black color and white background color. You can use the applications Info.plist file to change the status bar style: Go to the app/App_Resources/iOS folder.Open the Info.plist file. droid with NativeScript. Learn how to programmatically change the status bar text color on iOS and Android as well as the background color. The lesson also covers how to adjust the text color to be dark on Android in cases where the status The default style looks like Figure 4: icons with black color and white background color. You can use the applications Info.plist file to change the status bar style: Go to the app/App_Resources/iOS folder.Open the Info.plist file. droid with NativeScript. Learn how to programmatically change the status bar text color on iOS and Android as well as the background color. The lesson also covers how to adjust the text color to be dark on Android in cases where the status The default style looks like Figure 4: icons with black color and white background color. You can use the applications Info.plist file to change the status bar style: Go to the app/App_Resources/iOS folder.Open the Info.plist file. droid with NativeScript. Learn how to programmatically change the status bar text color on iOS and Android as well as the background color. The lesson also covers how to adjust the text color to be dark on Android in cases where the status The default style looks like Figure 4: icons with black color and white background color. You can use the applications Info.plist file to change the status bar style: Go to the app/App_Resources/iOS folder.Open the Info.plist file. droid with NativeScript. Learn how to programmatically change the status bar text color on iOS and Android as well as the background color. The lesson also covers how to adjust the text color to be dark on Android in cases where the status';

  constructor(private animationsService: AnimationsService, private routerExtensions: RouterExtensions) {
    this.offset = this.animationsService.getAnimationOffset;
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
    const imageHeightMaxChange = imageHeight - AboutComponent.IMAGE_MIN_HEIGHT;

    imageContainer.translateY = scrollOffset / 1.5;
    image.scaleX = 1 + scrollOffset / imageHeightMaxChange;
    image.scaleY = 1 + scrollOffset / imageHeightMaxChange;
    this.imageOpacity = 1 - scrollOffset / imageHeightMaxChange;
  }

  private applyTitleTransition(scrollOffset: number, imageHeight: number) {
    const imageHeightMaxChange = imageHeight - AboutComponent.IMAGE_MIN_HEIGHT;
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
      (scrollOffset - (imageHeight - AboutComponent.IMAGE_MIN_HEIGHT)) / AboutComponent.IMAGE_MIN_HEIGHT - 0.2;
  }
}
