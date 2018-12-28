import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private titleSource = new BehaviorSubject('Título');
  currentTitle = this.titleSource.asObservable();

  constructor() { }

  changeTitle(title: string) {
    this.titleSource.next(title)
  }

}