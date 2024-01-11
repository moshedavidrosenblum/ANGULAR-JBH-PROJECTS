import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamutzimComponent } from './chamutzim.component';

describe('ChamutzimComponent', () => {
  let component: ChamutzimComponent;
  let fixture: ComponentFixture<ChamutzimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChamutzimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamutzimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
