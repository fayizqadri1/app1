import { CurdService } from './../curd.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {

  constructor(private service: CurdService) { }
pack;
addmember(data){
  this.service.addmember(data.value);
}
  
  ngOnInit(): void {
    this.service.getpackage().subscribe((response)=>{
      this.pack=response["rows"]
    })
  }

}
