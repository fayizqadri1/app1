import { SnackbarService } from 'ngx-snackbar';
import { senData } from './../models/data.model';
import { CurdService } from './../curd.service';
import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-care-calender',
  templateUrl: './care-calender.component.html',
  styleUrls: ['./care-calender.component.css'],
  providers:[DatePipe]
})
export class CareCalenderComponent implements OnInit {
  viewcareCalendar;
  memberid;
  serviceplan;
  serviceid;
  viewmember;
  message='th Day from Registration'
  memberServicePlan: any;
  constructor(private service: CurdService,
    private commonservice: CommonServiceService,
    private router :Router,
    private datepipe:DatePipe,
    private snackbar:SnackbarService
    ) {
      this.memberid=commonservice.memberid,
      console.log(this.memberid)
      this.memberServicePlan=commonservice.memberServicePlan;
      console.log('serviceplan',this.memberServicePlan)
      
     }

//   ngOnInit(): void {
 
//     this.service.getcareCalendar(this.memberid).subscribe((response)=>{
//       console.log(response["rows"])
//       this.viewcareCalendar=response["rows"]
//     })

//   }

// }
// operational(serviceid){
//   console.log(serviceid)
//   this.service.getcareCalendar(serviceid,this.memberid).subscribe((response)=>{
//     console.log(response)
//     this.viewcareCalendar=response["rows"]
//   })
// }

status;
newDate
changeStatus(value,status){
  console.log('status',status)
if(status==='completed'){
  this.snackbar.add({
    msg: 'Service has been Already Completed',
    background: 'red',
    color: 'black',
    timeout: 5000,
    action: {
      text: 'Close',
      color: 'black',
    },
  });

}else{
 // this.newDate=this.datepipe.transform(value, 'yyyy-MM-dd')
console.log('value',value )
this.status='completed'
const data:senData={
  getdate: value,
  status: this.status,
  memberid: this.memberid

}
this.service.changeStatus(data).subscribe((response) => {
  console.log(response);
  this.service.getcareCalendar(this.memberServicePlan,this.memberid).subscribe((response)=>{
    console.log(response)
    this.viewcareCalendar=response["rows"]
  })
  this.snackbar.add({
    msg: response.message,
    background: '#ffcccb',
    color: 'black',
    timeout: 5000,
    action: {
      text: 'Close',
      color: 'red',
    },
  });
});
}
}
ngOnInit(): void {
 
  if (this.memberid){
    this.service.getmember(this.memberid).subscribe((response)=>{
      console.log(response)
      this.viewmember=response["rows"]
    })
     this.service.getcareCalendar(this.memberServicePlan,this.memberid).subscribe((response)=>{
        console.log(response)
        this.viewcareCalendar=response["rows"]
      })
    }else{
      this.router.navigate(['/viewmember'])

    }

  }
  
}