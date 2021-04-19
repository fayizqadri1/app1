import { take } from 'rxjs/operators';
import { doctor } from './models/doctor.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class CurdService {
private doctor:doctor[];
  constructor( private http:HttpClient,
    private snackBar: MatSnackBar
    ) { }
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
  this.http.post('http://localhost:3000/api/addappointment',data).subscribe((response)=>{
    console.log(response);
    
  })
}

getdoctor():Observable<any>{
  return this.http.get('http://localhost:3000/api/getdoctor');
}

addpackage(data){
  this.http.post('http://localhost:3000/api/addpackage',data).subscribe((response)=>{
    console.log(response)
  })
} 
getappointment():Observable<any>{
  return this.http.get('http://localhost:3000/api/getappointment');
}

addmember(data){
  this.http.post('http://localhost:3000/api/addmember',data).subscribe((response)=>{
    console.log(response)
  })
}

getpackage():Observable<any>{
  return this.http.get('http://localhost:3000/api/getpackage');
}

getmember(value):Observable<any>{
  const searchParams = {
    params: {
        param1: value,
    }
}
  console.log(value)
  return this.http.get('http://localhost:3000/api/getmember',searchParams).pipe(take(1))
}

viewMember():Observable<any>{
  return this.http.get('http://localhost:3000/api/viewmember');
  
}
viewdoctor():Observable<any>{
  return this.http.get('http://localhost:3000/api/viewdoctor');
}

viewpackage():Observable<any>{
 return  this.http.get("http://localhost:3000/api/viewpackage");
}
}
