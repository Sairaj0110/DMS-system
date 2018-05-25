import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VieweachuserComponent } from './vieweachuser.component';

describe('VieweachuserComponent', () => {
  let component: VieweachuserComponent;
  let fixture: ComponentFixture<VieweachuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VieweachuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VieweachuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
