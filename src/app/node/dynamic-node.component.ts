import { Component, Input, AfterViewInit } from '@angular/core';
import { NodeService } from './node.service';
import { jsPlumb } from 'jsplumb';

export interface Node {
  id: string;
  name: string;
  type: string;
}

@Component({
  selector: 'app-dynamic-node',
  template: `
  <div class="node"  id="{{node.id}}" style="top: 0; left: 50%;">
		{{node.name}}
  </div>`,
  styles: [`
  .node {
  position: relative;
  width: 100px;
  height: 30px;
  padding: 4px;
  box-shadow: 0 10px 40px 0 #B0C1D9;
  text-align: center;
}
  `]
})
export class DynamicNodeComponent implements AfterViewInit {

  @Input() node: Node;
  @Input() jsPlumbInstance;

  constructor() { }
  ngAfterViewInit() {
    const exampleDropOptions = {
      tolerance: 'touch',
      hoverClass: 'dropHover',
      activeClass: 'dragActive'
    };
    const Endpoint1 = {
      endpoint: ['Dot', { radius: 7 }],
      paintStyle: { fill: '#99cb3a' },
      isSource: true,
      scope: 'jsPlumb_DefaultScope',
      connectorStyle: { stroke: '#99cb3a', strokeWidth: 3 },
      connector: ['Bezier', { curviness: 63 } ],
      maxConnections: 1,
      isTarget: false,
      connectorOverlays: [ [ 'Arrow', { location: 1 } ] ],
      dropOptions: exampleDropOptions
    };
    const Endpoint2 = {
      endpoint: ['Dot', { radius: 4 }],
      paintStyle: { fill: '#ffcb3a' },
      isSource: false,
      scope: 'jsPlumb_DefaultScope',
      connectorStyle: { stroke: '#ffcb3a', strokeWidth: 6 },
      connector: ['Bezier', { curviness: 23 } ],
      maxConnections: 1,
      isTarget: true,
      dropOptions: exampleDropOptions
    };

    if (this.node.type === 'start') {
      this.jsPlumbInstance.addEndpoint(this.node.id, {anchor: 'Right', uuid: this.node.id}, Endpoint1); // source
    } else if (this.node.type === 'end') {
      this.jsPlumbInstance.addEndpoint(this.node.id, {anchor: 'Left', uuid: this.node.id}, Endpoint2);  // target
    } else {
      this.jsPlumbInstance.addEndpoint(this.node.id, {anchor: 'Right', uuid: this.node.id}, Endpoint1); // source
      this.jsPlumbInstance.addEndpoint(this.node.id, {anchor: 'Left', uuid: this.node.id}, Endpoint2);  // target
    }
    this.jsPlumbInstance.draggable(this.node.id);
}
}

