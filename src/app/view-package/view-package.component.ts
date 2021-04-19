import { CurdService } from './../curd.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-package',
  templateUrl: './view-package.component.html',
  styleUrls: ['./view-package.component.css']
})
export class ViewPackageComponent implements OnInit {
viewpackage;
  constructor(private service: CurdService) { }

  ngOnInit(): void {
    this.service.viewpackage().subscribe((response)=>{
      console.log(response)
      this.viewpackage=response["rows"]
    })

  }

}
