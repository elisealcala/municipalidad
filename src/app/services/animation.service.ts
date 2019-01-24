import { Injectable } from '@angular/core';

@Injectable()
export class AnimationsService {
  private animationOffset: number;

  get getAnimationOffset(): number {
    return this.animationOffset;
  }

  set getAnimationOffset(offset: number) {
    this.animationOffset = offset;
  }
}
