import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharatComponent } from './sharat.component';

describe('SharatComponent', () => {
  let component: SharatComponent;
  let fixture: ComponentFixture<SharatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
