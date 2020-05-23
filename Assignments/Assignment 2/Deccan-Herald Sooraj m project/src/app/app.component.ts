import { Component, OnInit } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatDialog} from '@angular/material/dialog';

export interface DialogData {
  id:number;
  dplink: string;
  postlink:string;
  todos:any[];
  pagelink:string;
  title:string;
  pagetitle:string;
}

declare const feather: any;
export interface DialogData {
  title: string;
  todos:any[];
  id:number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Deccan-Herald';
  open=false;
  ngOnInit() {
    feather.replace();
  }
  
  constructor() {}

}
  
