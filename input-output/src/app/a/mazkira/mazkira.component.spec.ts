import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MazkiraComponent } from './mazkira.component';

describe('MazkiraComponent', () => {
  let component: MazkiraComponent;
  let fixture: ComponentFixture<MazkiraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MazkiraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MazkiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
