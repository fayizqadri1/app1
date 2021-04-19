import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareCalenderComponent } from './care-calender.component';

describe('CareCalenderComponent', () => {
  let component: CareCalenderComponent;
  let fixture: ComponentFixture<CareCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareCalenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
