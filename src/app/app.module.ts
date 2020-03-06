import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NodeComponent } from './node/node.component';
import { DynamicNodeComponent } from './node/dynamic-node.component';
import { NodeService } from './node/node.service';

@NgModule({
  declarations: [
    AppComponent,
    NodeComponent,
    DynamicNodeComponent
  ],
  entryComponents: [DynamicNodeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
