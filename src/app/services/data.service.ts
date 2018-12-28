import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Gasto } from '../models';

@Injectable()
export class DataService {

  private titleSource = new BehaviorSubject('Título');
  private newExpense = new BehaviorSubject({});
  currentTitle = this.titleSource.asObservable();
  currentExpense = this.newExpense.asObservable();

  constructor() { }

  changeTitle(title: string) {
    this.titleSource.next(title);
  }

  changeData(data:Gasto) {
    this.newExpense.next(data);
  }

}