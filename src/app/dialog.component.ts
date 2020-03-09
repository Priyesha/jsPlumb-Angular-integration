import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';

export interface DialogModel {
  title: string;
  questions: any;
}

@Component({
  selector: 'app-dialog',
  template: `
    <div class="modal-content">
      <div class="modal-header">
        <h4>{{title}}</h4>
      </div>
      <div class="modal-body">
        <ng-template ngFor let-pair [ngForOf]="keys(questions)" let-i="index">
        <label>{{pair}}</label>
        <input type="text" class="form-control" [(ngModel)]="questions[pair]" name="name" />
        </ng-template>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-danger" (click)="close()">Cancel</button>
        <button type="button" class="btn btn-primary" (click)="apply()">Confirm</button>
      </div>
    </div>
  `
})
export class DialogComponent extends SimpleModalComponent<DialogModel, DialogModel['questions']> implements DialogModel {
  title: string;
  questions: {Name: '', Type: ''};
  constructor() {
    super();
  }

  keys(obj) {
    return Object.keys(obj);
  }
  apply() {
    this.result = this.questions;
    this.close();
  }
}
