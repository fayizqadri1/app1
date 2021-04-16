import { CurdService } from './../curd.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  constructor(private service:CurdService) { }
  adddoctor(docReg){
    //śconsole.log(docReg.value);
    this.service.addDoctor(docReg.value)

  }
  ngOnInit(): void {
  }

}
