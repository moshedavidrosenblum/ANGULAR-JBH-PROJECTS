import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenakeComponent } from './menake.component';

describe('MenakeComponent', () => {
  let component: MenakeComponent;
  let fixture: ComponentFixture<MenakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
