import { CurdService } from './../curd.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {

  constructor( private service: CurdService) { }
 

  package(data){
    this.service.addpackage(data.value);
   // console.log(data.value)
  }

  ngOnInit(): void {
  }

}
