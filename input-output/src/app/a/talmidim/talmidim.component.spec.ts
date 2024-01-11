import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalmidimComponent } from './talmidim.component';

describe('TalmidimComponent', () => {
  let component: TalmidimComponent;
  let fixture: ComponentFixture<TalmidimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalmidimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalmidimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
