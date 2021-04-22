import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewServicePlanComponent } from './view-service-plan.component';

describe('ViewServicePlanComponent', () => {
  let component: ViewServicePlanComponent;
  let fixture: ComponentFixture<ViewServicePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewServicePlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewServicePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
