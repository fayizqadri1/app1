import { CurdService } from './../curd.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-plan',
  templateUrl: './service-plan.component.html',
  styleUrls: ['./service-plan.component.css']
})
export class ServicePlanComponent implements OnInit {

  constructor(private service: CurdService) { }
  serviceData;
  serviceplan(data : NgForm){
    this.serviceData=data.value;
    console.log(this.serviceData)
    this.service.servicePlan(this.serviceData);
    data.resetForm()

  }

  ngOnInit(): void {
  }

}
