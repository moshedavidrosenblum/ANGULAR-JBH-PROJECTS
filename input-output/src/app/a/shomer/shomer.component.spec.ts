import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShomerComponent } from './shomer.component';

describe('ShomerComponent', () => {
  let component: ShomerComponent;
  let fixture: ComponentFixture<ShomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
