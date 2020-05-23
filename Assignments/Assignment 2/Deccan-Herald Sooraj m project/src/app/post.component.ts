import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { TaskListComponent } from '../task-list/task-list.component';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
export interface DialogData {
  id:number;
  dplink: string;
  postlink:string;
  todos:any[];
  pagelink:string;
  title:string;
  pagetitle:string;
}
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  

  ngOnInit(): void {
  }
  id:number;
  dplink: string="";
  postlink:string="";
  pagelink:string="";
  title:string="";
  pagetitle:string="";
  todos=[{id:0,dplink:" ",postlink:" ",pagelink:" ", title: " ",pagetitle:" "}];
​
  constructor(public dialog: MatDialog) {}
​

  openDialog(): void {
    const dialogRef = this.dialog.open(TaskListComponent, {
      width: '300px',
      data: {id:this.id,dplink:this.dplink, postlink:this.postlink,pagelink: this.pagelink,title:this.title,pagetitle:this.pagetitle}
      
    });
​
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



