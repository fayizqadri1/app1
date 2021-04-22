import { ViewServicePlanComponent } from './view-service-plan/view-service-plan.component';
import { ServicePlanComponent } from './service-plan/service-plan.component';
import { CareCalenderComponent } from './care-calender/care-calender.component';
import { ViewPackageComponent } from './view-package/view-package.component';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';
import { ViewMemberComponent } from './view-member/view-member.component';
import { ViewAppointmewntComponent } from './view-appointmewnt/view-appointmewnt.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { PackageComponent } from './package/package.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'adddoctor', component: AddDoctorComponent },
  { path: 'bookappointment', component: BookAppointmentComponent },
  { path: 'package', component: PackageComponent },
  { path: 'memberform', component: MemberFormComponent },
  { path: 'viewappointment', component: ViewAppointmewntComponent },

  { path: 'viewmember', component: ViewMemberComponent },
  { path: 'viewdoctor', component: ViewDoctorComponent },
  { path: 'viewpackage', component: ViewPackageComponent },
  { path: 'carecalender', component: CareCalenderComponent },

  { path: 'viewdoctors', component: ViewDoctorComponent },
  {path: 'serviceplan',component:ServicePlanComponent},
  {path:'viewserviceplan',component:ViewServicePlanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
