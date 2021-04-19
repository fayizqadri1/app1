import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppointmewntComponent } from './view-appointmewnt.component';

describe('ViewAppointmewntComponent', () => {
  let component: ViewAppointmewntComponent;
  let fixture: ComponentFixture<ViewAppointmewntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAppointmewntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAppointmewntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
