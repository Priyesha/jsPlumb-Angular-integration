import { Component, OnInit, AfterViewInit, ViewChild, ViewContainerRef, Input, OnChanges } from '@angular/core';
import { jsPlumb } from 'jsplumb';
import { NodeService } from './node.service';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnChanges, AfterViewInit {

  @Input() nodes;
  @ViewChild('nodes', { read: ViewContainerRef, static: true }) viewContainerRef: ViewContainerRef;
  constructor(private nodeService: NodeService) {
  }

  ngAfterViewInit(): void {
    const self = this;
    this.nodeService.jsPlumbInstance.ready(function() {
    const common = {
         connector: ['Flowchart'],
         anchor: ['Left', 'Right'],
         endpoint: 'Dot'
       };
    this.nodeService.jsPlumbInstance.connect({
         source: '',
         target: '',
         paintStyle: { stroke: 'lightgray', strokeWidth: 3 },
         endpointStyle: { fillStyle: 'lightgray', outlineStroke: 'gray' },
         overlays: [
           ['Arrow', { width: 24, length: 24, location: 0.80 }],
           ['Label', {
             label: '', id: '', cssClass: '',
             events: {
               click(labelOverlay, originalEvent) {
                 console.log('jfljla');
               }
             }
           }]
         ]
       }, common);
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
}
