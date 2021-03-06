import { senData } from './models/data.model';
import { take } from 'rxjs/operators';
import { doctor } from './models/doctor.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { SnackbarService } from 'ngx-snackbar';

@Injectable({
  providedIn: 'root',
})
export class CurdService {
  private doctor: doctor[];
  constructor(private http: HttpClient, private snackbar: SnackbarService) {}
  message: string;
  getdoc() {
    this.http
      .get<{ message: string; doctor: doctor }>(
        'http://localhost:3000/api/adddoctor'
      )
      .subscribe((response) => {
        //this.message=
        console.log(response);

        // this.doctor: data.doctor
      });
  }

  addDoctor(data) {
    console.log(data);
    this.http
      .post<{ message: string }>('http://localhost:3000/api/adddoctor', data)
      .subscribe((response) => {
        console.log(response.message);

        this.snackbar.add({
          msg: response.message,
          background: '#ffcccb',
          color: 'black',
          timeout: 8000,
          action: {
            text: 'Close',
            color: 'red',
          },
        });
      });
  }

  addAppointment(data) {
    this.http
      .post<{ message: string }>(
        'http://localhost:3000/api/addappointment',
        data
      )
      .subscribe((response) => {
        console.log(response);
        this.snackbar.add({
          msg: response.message,
          background: '#ffcccb',
          color: 'black',
          timeout: 8000,
          action: {
            text: 'Close',
            color: 'red',
          },
        });
      });
  }

  getdoctor(): Observable<any> {
    return this.http.get('http://localhost:3000/api/getdoctor');
  }

  addpackage(data) {
    this.http
      .post<{ message: string }>('http://localhost:3000/api/addpackage', data)
      .subscribe((response) => {
        console.log(response);
        this.snackbar.add({
          msg: response.message,
          background: '#ffcccb',
          color: 'black',
          timeout: 8000,
          action: {
            text: 'Close',
            color: 'red',
          },
        });
      });
  }
  getappointment(): Observable<any> {
    return this.http.get('http://localhost:3000/api/getappointment');
  }

  getdocdata(): Observable<any> {
    return this.http.get('http://localhost:3000/api/getdoctable');
  }

  addmember(data) {
    this.http
      .post<{ message: string }>('http://localhost:3000/api/addmember', data)
      .subscribe((response) => {
        console.log(response);
        this.snackbar.add({
          msg: response.message,
          background: '#ffcccb',
          color: 'black',
          timeout: 8000,
          action: {
            text: 'Close',
            color: 'red',
          },
        });
      });
  }

  getpackage(): Observable<any> {
    return this.http.get('http://localhost:3000/api/getpackage');
  }

  getmember(value): Observable<any> {
    const searchParams = {
      params: {
        param1: value,
      },
    };
    console.log(value);
    return this.http
      .get('http://localhost:3000/api/getmember', searchParams)
      .pipe(take(1));
  }

  viewMember(): Observable<any> {
    return this.http.get('http://localhost:3000/api/viewmember');
  }
  viewdoctor(): Observable<any> {
    return this.http.get('http://localhost:3000/api/viewdoctor');
  }

  viewpackage(): Observable<any> {
    return this.http.get('http://localhost:3000/api/viewpackage');
  }

  servicePlan(data){
    this.http
    .post<{ message: string }>(
      'http://localhost:3000/api/addserviceplan',
      data
    )
    .subscribe((response) => {
      console.log(response);
      this.snackbar.add({
        msg: response.message,
        background: '#ffcccb',
        color: 'black',
        timeout: 8000,
        action: {
          text: 'Close',
          color: 'red',
        },
      });
    });

   
  
  }

  getServicePlan(): Observable<any> {
    return this.http.get('http://localhost:3000/api/getserviceplan');
  }

  addoperationalsteps(data){
    this.http
    .post<{ message: string }>(
      'http://localhost:3000/api/addoperationalsteps',
      data
    )
    .subscribe((response) => {
      console.log(response);
      this.snackbar.add({
        msg: response.message,
        background: '#ffcccb',
        color: 'black',
        timeout: 8000,
        action: {
          text: 'Close',
          color: 'red',
        },
      });
    });
    
  }

  getOperationalSteps(value): Observable<any> {
    const searchParams = {
      params: {
        servicepid: value,
      },
    };
    return this.http
      .get('http://localhost:3000/api/getOperationalSteps', searchParams)
      .pipe(take(1));
  }

 

  getcareCalendar(serviceid,memberid): Observable<any> {
    const searchParams = {
      params: {
        memberid: memberid,
        serviceid:serviceid
      },
    };
    console.log('serviceid',serviceid,'memeid',memberid)
    return this.http.get('http://localhost:3000/api/carecalendar',searchParams);
  }
  changeStatus(data: senData){
    // const dataSent = {
    //   params: {
    //     memberid: memberid,
    //     date:value,
    //     data:data
    //   },
    // };
    console.log(data)
   return this.http.put<{message: string }>('http://localhost:3000/api/updatecarecalendar',data)
    
    
  }
}
