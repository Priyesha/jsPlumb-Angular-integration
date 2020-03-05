import { Component, AfterViewInit, OnInit } from '@angular/core';
import { jsPlumb } from 'jsplumb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = ' Angular jsPlumb Integration';
  jsPlumbInstance;
  totalnodes = 5;
  nodes = [];

  ngOnInit() {
    // this.nodes = 
  }
  ngAfterViewInit() {
    this.jsPlumbInstance = jsPlumb.getInstance();
  }
}

