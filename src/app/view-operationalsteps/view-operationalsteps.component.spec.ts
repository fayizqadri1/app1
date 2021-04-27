import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOperationalstepsComponent } from './view-operationalsteps.component';

describe('ViewOperationalstepsComponent', () => {
  let component: ViewOperationalstepsComponent;
  let fixture: ComponentFixture<ViewOperationalstepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOperationalstepsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOperationalstepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
