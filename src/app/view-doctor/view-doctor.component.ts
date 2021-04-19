import { CurdService } from './../curd.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.css']
})
export class ViewDoctorComponent implements OnInit {
  viewdoctors;
  constructor(private service: CurdService) { }

  ngOnInit(): void {
    this.service.getdocdata().subscribe((Response)=>{
      console.log(Response)
      this.viewdoctors=Response["rows"]
    })
  }

}
