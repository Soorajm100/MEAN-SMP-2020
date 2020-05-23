import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-luck',
  templateUrl: './luck.component.html',
  styleUrls: ['./luck.component.css']
})
export class LuckComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
i=''
num=function(){

  
  var x = Math.floor((Math.random() * 10) + 1);
  var t=String(x);

    if(t==this.i){
     
      document.write('<img src="http://gifimage.net/wp-content/uploads/2017/10/congratulation-animated-gif-11.gif" height=80% width="100%>" ');
      document.write('<h1><font color="red">You Won and you will get free Subscription for 1 Year</font></h1>')
}
else
{
  
  document.write('<img src="https://jennamolby.com/wp-content/uploads/2016/08/sorry.png" height="80%" width="100%">');
  document.write('<p>The lucky number was=</p>'+x);
   document.write('<p>Your number was=</p>'+this.i);
}


  }
  
}


