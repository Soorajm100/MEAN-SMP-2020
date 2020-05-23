import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckComponent } from './luck.component';

describe('LuckComponent', () => {
  let component: LuckComponent;
  let fixture: ComponentFixture<LuckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
