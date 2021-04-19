import { NgForm } from '@angular/forms';
import { CurdService } from './../curd.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css'],
})
export class BookAppointmentComponent implements OnInit {
  docview;
  data;
  constructor(private service: CurdService) {}

  appointment(appoint: NgForm) {
    this.data = appoint.value;
    this.service.addAppointment(this.data);
    console.log(this.data);
    appoint.reset();
  }

  memberdetail;
  memberid;
  memid(value) {
    this.memberid = value;
  }

  getmember() {
    
    this.service.getmember(this.memberid).subscribe((response) => {
      this.memberdetail = response['rows'];
      console.log(response);
    });
  }
  ngOnInit(): void {
    this.service
      .getdoctor()
      .pipe(take(1))
      .subscribe((response) => {
        console.log(response['rows']);
        // console.log(p[rows])
        this.docview = response['rows'];
      });
  }
}
