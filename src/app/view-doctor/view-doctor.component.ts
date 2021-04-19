import { CurdService } from './../curd.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.css']
})
export class ViewDoctorComponent implements OnInit {

viewdoctor;
  constructor(private service:CurdService) { }


  ngOnInit(): void {
    this.service.viewdoctor().subscribe((response)=>{
      this.viewdoctor=response["rows"];
     console.log(response)
      
  })
}
}


