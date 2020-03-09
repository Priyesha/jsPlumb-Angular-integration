import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';

export interface DialogModel {
  title: string;
  questions: {name: '', type: ''};
}

@Component({
  selector: 'app-dialog',
  template: `
    <div class="modal-content">
      <div class="modal-header">
        <h4>{{title}}</h4>
      </div>
      <div class="modal-body">
        <label>Name</label>
        <input type="text" class="form-control" [(ngModel)]="questions['name']" name="name" />
        <label>Type</label>
        <select [(ngModel)]="questions['type']">
        <option value="middle">Middle</option>
        <option value="end">End</option>
        </select>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-danger" (click)="close()">Cancel</button>
        <button type="button" class="btn btn-primary" (click)="apply()">Save</button>
      </div>
    </div>
  `
})
export class DialogComponent extends SimpleModalComponent<DialogModel, DialogModel['questions']> implements DialogModel {
  title: string;
  questions: {name: '', type: ''};
  constructor() {
    super();
  }

  apply() {
    this.result = this.questions;
    this.close();
  }
}
