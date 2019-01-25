import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Gasto } from '../models';

@Injectable()
export class DataService {
  public titleSource = new BehaviorSubject('Título');
  public newExpense = new BehaviorSubject({});
  public currentTitle = this.titleSource.asObservable();
  public currentExpense = this.newExpense.asObservable();
  public currentPage = 1;

  constructor() {}

  public nextPage() {
    this.currentPage = this.currentPage + 1;
  }

  public backPage() {
    this.currentPage = this.currentPage - 1;
  }

  public changeTitle(title: string) {
    this.titleSource.next(title);
  }

  public changeData(data: Gasto) {
    this.newExpense.next(data);
  }
}
