import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RosYeshivaComponent } from './ros-yeshiva.component';

describe('RosYeshivaComponent', () => {
  let component: RosYeshivaComponent;
  let fixture: ComponentFixture<RosYeshivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RosYeshivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RosYeshivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
