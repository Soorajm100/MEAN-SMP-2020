import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatDialog} from '@angular/material/dialog';
import { ToolbarComponent } from './toolbar.component';
import { TaskListComponent } from '../task-list/task-list.component';
import { SignupComponent } from '../signup/signup.component';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
