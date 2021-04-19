import { NgForm } from '@angular/forms';
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
data;
addmember(mem :NgForm){
  this.data=mem.value;
 this.service.addmember(this.data);
 console.log(this.data)
 mem.reset()
}
  
  ngOnInit(): void {
    this.service.getpackage().subscribe((response)=>{
      this.pack=response["rows"]
    })
  }

}
