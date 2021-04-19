import { CurdService } from './../curd.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-view-member',
  templateUrl: './view-member.component.html',
  styleUrls: ['./view-member.component.css']
})
export class ViewMemberComponent implements OnInit {
  viewmember;
  constructor(private service: CurdService) { }

  ngOnInit(): void {
    this.service.viewMember().pipe(take(1))
        .subscribe((response)=>{
      console.log(response)
    
     this.viewmember=response["rows"]
    })
  }

}
