import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { TaskListComponent } from '../task-list/task-list.component';
export interface DialogData {
  title: string;
  todos:any[];
  id:number;
}
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit {
  title: string="";
  id:number;
  todos=[{id:0, title: " "}];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(TaskListComponent, {
      width: '300px',
      data: {id: this.id,title: this.title}
      
    });

    dialogRef.afterClosed().subscribe(result => {
      
      this.todos.push(result);
      console.log(this.todos);
      this.title= result;
     
    });
    
  }
  delete(id:number)
  {
    this.todos.splice(id,1);
  }
  
  

}


