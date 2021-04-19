import { CurdService } from './../curd.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-appointmewnt',
  templateUrl: './view-appointmewnt.component.html',
  styleUrls: ['./view-appointmewnt.component.css']
})
export class ViewAppointmewntComponent implements OnInit {
viewappointment;
  constructor(private service: CurdService) { }

  ngOnInit(): void {
    this.service.getappointment().subscribe((Response)=>{
      console.log(Response)
      this.viewappointment=Response["rows"]
    })
  }

}
