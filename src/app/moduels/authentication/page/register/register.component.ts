import { Component, OnInit } from '@angular/core';
import {NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup;
  errorMessage= "" ; 
  err= false ; 
  constructor(    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router) {
      this.signupForm = this.fb.group({
        name: [''],
        email: [''],
        mobile: [''],
        password: ['']
      })
     }

  ngOnInit() { 
  
   
  }
  registerUser() {
    if (this.signupForm.valid){
    this.authService.signUp(this.signupForm.value).subscribe((res) => {
      if (res.result) {
        this.signupForm.reset()
        this.router.navigate(['login']);
      }
    },
    error => {this.err= true ; 
      this.errorMessage ="Email used before" ;  ;
           } )} 
           else {this.err = true ;  this.errorMessage="invalid input" ; };
  }
 
}
