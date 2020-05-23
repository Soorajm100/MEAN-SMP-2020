import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar' ;
import {MatButtonModule} from '@angular/material/button';

import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {FormsModule} from '@angular/forms';
import { SubscribeFormComponent } from './subscribe-form/subscribe-form.component';

import {MatSnackBarModule} from '@angular/material/snack-bar';

import {HttpClientModule} from '@angular/common/http';
import { CommentsComponent } from './comments/comments.component';
import {MatCardModule} from '@angular/material/card';
import { BonanzaComponent } from './bonanza/bonanza.component';
import { LuckComponent } from './luck/luck.component';
import { NewsComponent } from './news/news.component';

import { TaskListComponent } from './task-list/task-list.component';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatDialogModule} from '@angular/material/dialog';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    SubscribeFormComponent,
    CommentsComponent,
    BonanzaComponent,
    LuckComponent,
    NewsComponent,
  TaskListComponent,
  PostComponent,
    
 

    
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
 MatSnackBarModule,
 HttpClientModule,
 MatCardModule,
 MatFormFieldModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
