import { CurdService } from './../curd.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-service-plan',
  templateUrl: './view-service-plan.component.html',
  styleUrls: ['./view-service-plan.component.css']
})
export class ViewServicePlanComponent implements OnInit {

  constructor(private service :CurdService) { }
serviceplandetails;

  ngOnInit(): void {
    this.service.getServicePlan().subscribe((response)=>{
      console.log(response);
      this.serviceplandetails=response["rows"]
    })
  }

}
