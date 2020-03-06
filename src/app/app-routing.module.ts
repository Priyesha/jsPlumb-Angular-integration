import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NodeComponent } from './node/node.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: NodeComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
