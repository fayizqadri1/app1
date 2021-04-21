import { take } from 'rxjs/operators';
import { doctor } from './models/doctor.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
