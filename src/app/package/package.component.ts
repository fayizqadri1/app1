import { CurdService } from './../curd.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {
  // amount;
  // days;
  constructor( private service: CurdService) { }
  // packagename(value){
  //   console.log(value)
  //   if(value=='basic'){
  //     this.amount=10000;
  //     this.days=30;
  //   }else if (value=='silver'){
  //     this.amount=12000;
  //     this.days=45;
  //   }else if (value=='gold'){
  //     this.amount=15000;
  //     this.days=60;
  //   }else if (value=='diamond'){
  //     this.amount=18000;
  //     this.days=90;
  //   }else if (value=='platinum'){
  //     this.amount=25000;
  //     this.days=180;
  //   }

  // }

  package(data){
    this.service.addpackage(data.value);
   // console.log(data.value)
  }

  ngOnInit(): void {
  }

}
