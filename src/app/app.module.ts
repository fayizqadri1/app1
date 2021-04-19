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
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ViewMemberComponent } from './view-member/view-member.component';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';
import { ViewPackageComponent } from './view-package/view-package.component';
import { CareCalenderComponent } from './care-calender/care-calender.component';
@NgModule({
  declarations: [
    AppComponent,
  LoginComponent,
  DashboardComponent,
  AddDoctorComponent,
  BookAppointmentComponent,
  MemberFormComponent,
  PackageComponent,
  ViewAppointmewntComponent,
  ViewMemberComponent,
  ViewDoctorComponent,
  ViewPackageComponent,
  CareCalenderComponent,

 
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
   MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
