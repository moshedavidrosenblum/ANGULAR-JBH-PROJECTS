import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabachComponent } from './tabach.component';

describe('TabachComponent', () => {
  let component: TabachComponent;
  let fixture: ComponentFixture<TabachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
