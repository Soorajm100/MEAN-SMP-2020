import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonanzaComponent } from './bonanza.component';

describe('BonanzaComponent', () => {
  let component: BonanzaComponent;
  let fixture: ComponentFixture<BonanzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonanzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonanzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
