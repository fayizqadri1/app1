import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationalStepsComponent } from './operational-steps.component';

describe('OperationalStepsComponent', () => {
  let component: OperationalStepsComponent;
  let fixture: ComponentFixture<OperationalStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationalStepsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationalStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
