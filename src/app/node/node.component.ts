import { Component, OnInit, AfterViewInit, ViewChild, ViewContainerRef, Input, OnChanges } from '@angular/core';
import { NodeService } from './node.service';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnChanges, OnInit {

  @Input() nodes;
  @ViewChild('nodes', { read: ViewContainerRef, static: true }) viewContainerRef: ViewContainerRef;
  constructor(private nodeService: NodeService) {
  }

  ngOnInit() {
    this.nodeService.jsPlumbInstance.bind('connection', function(info) {
      console.log('connection made');
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
