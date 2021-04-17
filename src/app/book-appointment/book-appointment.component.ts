import { CurdService } from './../curd.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {
  docview;
  constructor( private service:CurdService) { }
  appointment(appoint){
    this.service.addAppointment(appoint.value);
    console.log(appoint.value)

  }
  memberdetail;
memid(value){
  this.service.getmember(value).subscribe((response)=>{
this.memberdetail=response["rows"]
console.log(response)
  })
}
  ngOnInit(): void {
    this.service.getdoctor().subscribe((response) => {
      
      console.log(response["rows"])
      // console.log(p[rows])
      this.docview = response["rows"]
  }
    
    )
  }

}
