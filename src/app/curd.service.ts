import { doctor } from './models/doctor.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurdService {
private doctor:doctor[];
  constructor( private http:HttpClient) { }
  getdoc(){
    this.http.get<{message:string, doctor:doctor}>('http://localhost:3000/api/adddoctor')
    .subscribe((data)=>{
      console.log(data);
      // this.doctor: data.doctor
      

    });
  }

  addDoctor(data){
    this.http.post('http://localhost:3000/api/adddoctor',data)
  .subscribe((dat)=>{
    console.log(dat)
  })

}

addAppointment(data){
  this.http.post('http://localhost:3000/api/addappointment',data).subscribe(()=>{
    console.log('Appointment successfully booked');
  })
}

getdoctor():Observable<any>{
  return this.http.get('http://localhost:3000/api/getdoctor');
}
}
