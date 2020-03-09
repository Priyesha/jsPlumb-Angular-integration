import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NodeComponent } from './node/node.component';
import { DynamicNodeComponent } from './node/dynamic-node.component';
import { NodeService } from './node/node.service';
import { SimpleModalModule } from 'ngx-simple-modal';
import { DialogComponent } from './dialog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NodeComponent,
    DynamicNodeComponent,
    DialogComponent
  ],
  entryComponents: [DynamicNodeComponent, DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SimpleModalModule.forRoot({container: 'modal-container'})
  ],
  providers: [NodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
