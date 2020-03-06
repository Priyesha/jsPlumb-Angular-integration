import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';

export interface DialogModel {
  title: string;
  question: string;
}

@Component({
  selector: 'dialog',
  template: `
    <div class="modal-content">
      <div class="modal-header">
        <h4>{{title}}</h4>
      </div>
      <div class="modal-body">
        <ng-template *ngFor="let question of questions; let i = index">
        <label>{{question}}</label>
        <input type="text" class="form-control" [(ngModel)]="details[i]" name="name" />
        </ng-template>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-danger" (click)="close()">Cancel</button>
        <button type="button" class="btn btn-primary" (click)="apply()">Confirm</button>
      </div>
    </div>
  `
})
export class PromptComponent extends SimpleModalComponent<PromptModel, string> implements PromptModel {
  title: string;
  questions: string[];
  details: {name: '', type: ''};
  constructor() {
    super();
  }
  apply() {
    this.result = this.message;
    this.close();
  }
}
