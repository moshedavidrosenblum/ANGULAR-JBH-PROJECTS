import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RamimComponent } from './ramim.component';

describe('RamimComponent', () => {
  let component: RamimComponent;
  let fixture: ComponentFixture<RamimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RamimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RamimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
