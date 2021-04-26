import { CurdService } from './../curd.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operational-steps',
  templateUrl: './operational-steps.component.html',
  styleUrls: ['./operational-steps.component.css']
})
export class OperationalStepsComponent implements OnInit {
serviceplan;
  constructor(private service: CurdService) { }
  activites(activite){}

  ngOnInit(): void {
    this.service.getServicePlan().subscribe((response)=>{
      console.log(response)
      this.serviceplan=response["rows"]
    })
      }

}
