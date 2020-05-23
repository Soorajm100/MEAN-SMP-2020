import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Login1Component } from './login1/login1.component';
import { SignupComponent } from './signup/signup.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { AppComponent } from './app.component';
import { SubscribeFormComponent } from './subscribe-form/subscribe-form.component';
import { LoginComponent } from './login/login.component';
import { BonanzaComponent } from './bonanza/bonanza.component';
import { LuckComponent } from './luck/luck.component';
import { NewsComponent } from './news/news.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PostComponent } from './post/post.component';


const routes: Routes = [
  {path:'login1-component',component:Login1Component},
  {path:'signup-component',component:SignupComponent},
  {path:'subscribe-component',component:SubscribeComponent},
  {path:'app-component',component:AppComponent},
  {path:'subscribe-form-component',component:SubscribeFormComponent},
  {path:'login-component',component:LoginComponent},
  {path:'bonanza-component',component:BonanzaComponent},
  {path:'luck-component',component:LuckComponent},
  {path:'news-component',component:NewsComponent},
  {path:'toolbar-component',component:ToolbarComponent},
  {path:'post-component',component:PostComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
