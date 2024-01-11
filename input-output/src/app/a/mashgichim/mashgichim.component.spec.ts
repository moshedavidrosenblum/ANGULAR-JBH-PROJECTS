import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MashgichimComponent } from './mashgichim.component';

describe('MashgichimComponent', () => {
  let component: MashgichimComponent;
  let fixture: ComponentFixture<MashgichimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MashgichimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MashgichimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
