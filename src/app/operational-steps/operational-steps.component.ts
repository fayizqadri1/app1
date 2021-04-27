import { NgForm } from '@angular/forms';
import { CurdService } from './../curd.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operational-steps',
  templateUrl: './operational-steps.component.html',
  styleUrls: ['./operational-steps.component.css']
})
export class OperationalStepsComponent implements OnInit {
serviceplan;
data;
  constructor(private service: CurdService) { }
  activites(formData: NgForm){
    this.data=formData.value;
    this.service.addoperationalsteps(this.data);
    console.log(this.data);
    formData.resetForm();
  }

  ngOnInit(): void {
    this.service.getServicePlan().subscribe((response)=>{
      console.log(response)
      this.serviceplan=response["rows"]
    })
      }

}
