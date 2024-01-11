import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MefakeachComponent } from './mefakeach.component';

describe('MefakeachComponent', () => {
  let component: MefakeachComponent;
  let fixture: ComponentFixture<MefakeachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MefakeachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MefakeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
