import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }
  username="admin123"
  password="12345"
  user;
  pass;
signin(login){
  // console.log(login.value.password)
this.user=login.value.username
 this.pass=login.value.password
 if(this.user==this.username&&this.pass==this.password){
   console.log('loginin')
   this.router.navigate(['/dashboard']);

 }else{
   console.log('unsuccessful')
 }

}

  ngOnInit(): void {
  }

}
