import { Component, OnInit } from '@angular/core';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

	textMessages = [];
	textUserNames = [];
	newName="";
	newComment="";
	l=0;

	
	pushItem = function(){
	
	if (this.newName != ""||this.newComment != "") {
	this.textUserNames.push({p:this.newName+"  commented 2 hour ago",t:this.newComment});
	
    
	
	}
	
	

	if (this.newComment != "") {
	this.textMessages.push(this.newComment);

	this.newComment = "";
	

	}
	}
	
	li=[];
    y=[];
 i=0;
  t=0;
	like= function(){
     
	
		this.i++;
	this.t++;
	this.y[this.i]=this.t;
	this.li=[]
    this.li.push(this.y[this.i]);
		this.i++;
}
	di=[];
	
	h=0;
	m=0;
	dist= function(){


		this.h++;
		this.di=[];
		this.di.push(this.h);


		
	}


	constructor() {}
	ngOnInit() {
	}

  }

