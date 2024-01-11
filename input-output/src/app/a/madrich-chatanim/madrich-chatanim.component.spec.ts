import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadrichChatanimComponent } from './madrich-chatanim.component';

describe('MadrichChatanimComponent', () => {
  let component: MadrichChatanimComponent;
  let fixture: ComponentFixture<MadrichChatanimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadrichChatanimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadrichChatanimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
