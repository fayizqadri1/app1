import { NgForm } from '@angular/forms';
import { CurdService } from './../curd.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  constructor(private service:CurdService) { }
  data;
  adddoctor(docReg: NgForm){
    this.data=docReg.value
    //śconsole.log(docReg.value);
    this.service.addDoctor(this.data)
    docReg.reset()


  }
  ngOnInit(): void {
  }

}
