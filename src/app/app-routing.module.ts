import { ViewAppointmewntComponent } from './view-appointmewnt/view-appointmewnt.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { PackageComponent } from './package/package.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';

const routes: Routes = [
  {path: '',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path: 'adddoctor', component:AddDoctorComponent},
  {path:'bookappointment', component:BookAppointmentComponent},
  {path:'package',component:PackageComponent},
  {path: 'memberform', component:MemberFormComponent},
  {path: 'viewappointment',component:ViewAppointmewntComponent},
  {path: 'viewdoctors',component:ViewDoctorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
