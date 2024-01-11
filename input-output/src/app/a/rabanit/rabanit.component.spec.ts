import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RabanitComponent } from './rabanit.component';

describe('RabanitComponent', () => {
  let component: RabanitComponent;
  let fixture: ComponentFixture<RabanitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RabanitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RabanitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
