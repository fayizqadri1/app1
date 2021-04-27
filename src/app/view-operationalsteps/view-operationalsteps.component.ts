import { CurdService } from './../curd.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-operationalsteps',
  templateUrl: './view-operationalsteps.component.html',
  styleUrls: ['./view-operationalsteps.component.css']
})
export class ViewOperationalstepsComponent implements OnInit {
  viewoperationalSteps;
  serviceplan: any;
  constructor( 
    private service: CurdService
  ) { }

  operational(value){
    console.log(value)
    this.service.getOperationalSteps(value).subscribe((response)=>{
      console.log(response)
      this.viewoperationalSteps=response["rows"]
    })
  }
  
  ngOnInit(): void {
    
    this.service.getServicePlan().subscribe((response)=>{
      console.log(response)
      this.serviceplan=response["rows"]
    })
      }
  }


