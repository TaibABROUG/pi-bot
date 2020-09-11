import { Component, OnInit } from '@angular/core';
import {NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { SocialUser } from 'src/app/shared/models/socialUser';
import { AuthService as AuthGService,GoogleLoginProvider} from 'angular-6-social-login';
import { SocialLoginModule, AuthServiceConfig } from 'angular-6-social-login'; 
import { User } from 'src/app/shared/models/user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  response;    
  socialuser = new SocialUser() ; 
  signupForm: FormGroup;
  errorMessage= "" ; 
  err= false ; 
 user : User ;
 user2 : User ; 
  constructor(    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router , private socialAuthService: AuthGService ) {
      this.signupForm = this.fb.group({
        name: [''],
        email: [''],
        password: ['']
      })
     }

  ngOnInit() { 

   
  }
  registerUser() {
    if (this.signupForm.valid){
      console.log("register value : " ,this.signupForm.value) 
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
  signInWithGoogle(){
    let socialPlatformProvider;  
    socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;  
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (socialuser) => {

        console.log("google sign in data : " , socialuser);
       
        this.authService.signInGoogle(socialuser) ; 
      
      })
   //   if (this.signupForm.valid){

     // }
            
      
    

    
  }
 
}
