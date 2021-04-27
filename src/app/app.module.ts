import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { HttpClientModule } from '@angular/common/http';
import { MemberFormComponent } from './member-form/member-form.component';
import { PackageComponent } from './package/package.component';
import { ViewAppointmewntComponent } from './view-appointmewnt/view-appointmewnt.component';


import { ViewMemberComponent } from './view-member/view-member.component';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';
import { ViewPackageComponent } from './view-package/view-package.component';
import { CareCalenderComponent } from './care-calender/care-calender.component';
import { SnackbarModule } from 'ngx-snackbar';
import { NavbarComponent } from './navbar/navbar.component';
import { ServicePlanComponent } from './service-plan/service-plan.component';
import { ViewServicePlanComponent } from './view-service-plan/view-service-plan.component';
import { OperationalStepsComponent } from './operational-steps/operational-steps.component';
import { ViewOperationalstepsComponent } from './view-operationalsteps/view-operationalsteps.component';



@NgModule({
  declarations: [
    ViewMemberComponent,
    ViewDoctorComponent,
    ViewPackageComponent,
    CareCalenderComponent,
    AppComponent,
  LoginComponent,
  DashboardComponent,
  AddDoctorComponent,
  BookAppointmentComponent,
  MemberFormComponent,
  PackageComponent,
  ViewAppointmewntComponent,
  NavbarComponent,
  ServicePlanComponent,
  ViewServicePlanComponent,
  OperationalStepsComponent,
  ViewOperationalstepsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
   HttpClientModule,
   SnackbarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
