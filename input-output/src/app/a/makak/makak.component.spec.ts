import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakakComponent } from './makak.component';

describe('MakakComponent', () => {
  let component: MakakComponent;
  let fixture: ComponentFixture<MakakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
