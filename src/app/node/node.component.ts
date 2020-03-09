import { Component, OnInit, AfterViewInit, ViewChild, ViewContainerRef, Input, OnChanges } from '@angular/core';
import { NodeService } from './node.service';
import { SimpleModalService } from 'ngx-simple-modal';
import { DialogComponent } from '../dialog.component';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnChanges, AfterViewInit {

  @Input() nodes;
  @ViewChild('nodes', { read: ViewContainerRef, static: true }) viewContainerRef: ViewContainerRef;
  constructor(private nodeService: NodeService, private simpleModalService: SimpleModalService) {
  }

  ngAfterViewInit() {
    this.nodeService.jsPlumbInstance.bind('connection', info => {
      console.log('connection made', info.targetId);
      // this.simpleModalService.addModal
      this.simpleModalService.addModal(DialogComponent, {
        title: 'Dialog',
        questions: { Name: '', Type: ''}})
        .subscribe((result) => {
          // this.nodes
          console.log('inside subscribe', result);
          const targetNode = this.nodes.find(node => node.id === info.targetId);
          if (targetNode) {
            targetNode.name = result.Name;
            targetNode.type = result.Type;
          }
          console.log(this.nodes);
        });
   });
  }

  ngOnChanges() {
    this.nodeService.setRootViewContainerRef(this.viewContainerRef);
    this.nodeService.clear();
    if (this.nodes.length > 0) {
      this.nodes.forEach(node => {
        this.nodeService.addDynamicNode(node);
      });
    }
  }

  saveNodeJson(){

    const connections = (this.nodeService.jsPlumbInstance.getAllConnections() as any[])
        .map((conn) => ({ uuids: conn.getUuids() }));

    // const json = JSON.stringify({ nodes, connections });

    console.log(connections);
  }
}
