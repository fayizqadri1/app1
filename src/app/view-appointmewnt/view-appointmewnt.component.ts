import { SnackbarService } from 'ngx-snackbar';
import { CurdService } from './../curd.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-appointmewnt',
  templateUrl: './view-appointmewnt.component.html',
  styleUrls: ['./view-appointmewnt.component.css']
})
export class ViewAppointmewntComponent implements OnInit {
viewappointment;
  constructor(private service: CurdService,
    private snackbar:SnackbarService
    ) { }

  ngOnInit(): void {
    this.service.getappointment().subscribe((Response)=>{
      if (Response["rowCount"]===0){
        this.snackbar.add({
          msg: 'No Data Found',
          background: '#red',
          color: 'black',
          timeout: 8000,
          action: {
            text: 'Close',
            color: 'red',
          },
        });
      }else{
        console.log(Response)
      this.viewappointment=Response["rows"]

      }

      
      
    })
  }

}
