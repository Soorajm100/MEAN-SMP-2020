import { Component, OnInit } from '@angular/core';
import { Subscribe } from '../subscribe';
import { MatSnackBar } from "@angular/material/snack-bar";





@Component({
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.css']
})
export class SubscribeFormComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) { }
  plans=['Monthly Subscription( $ 9.99 for each month)',' Annual ( $ 80.00 for each year ) ','1 week($6.00 for each week)'];
model=new Subscribe(1,'Sooraj','soorajm825@gmail.com','panchavati nilaya','9980232689',this.plans[0]);

submitted= false;
onSubmit(){this.submitted=true;}
  ngOnInit(): void {
  }
  newHero() {
    var l=1;
    l++;
    this.model = new Subscribe(l,'','','','','');
  }
  get diagnostic() {return JSON.stringify(this.model);}
 
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
       duration: 2000,
    });
}
}