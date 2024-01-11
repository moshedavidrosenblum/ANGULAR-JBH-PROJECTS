import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChumusComponent } from './chumus.component';

describe('ChumusComponent', () => {
  let component: ChumusComponent;
  let fixture: ComponentFixture<ChumusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChumusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChumusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
