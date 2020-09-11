import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { SocialUser } from 'src/app/shared/models/socialUser';
import { AuthService as AuthGService,GoogleLoginProvider ,SocialLoginModule  } from 'angular-6-social-login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [SocialLoginModule, AuthService]
})
export class LoginComponent implements OnInit {
  signinForm: FormGroup;
  user: SocialUser;
  loggedIn:boolean;

  constructor(
             public fb: FormBuilder , 
             public authService:  AuthService , 
             public router: Router,
             private socialAuthService: AuthGService
             )
              {
    this.signinForm= this.fb.group ({
      email: ['']  , 
      password : ['']
    })
   }

  ngOnInit() { this.authService.errorLogin = false ; 
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
  });

    
    
  }
  loginUser() {
   
    this.authService.signIn(this.signinForm.value);
   
  }
  signInWithGoogle(){
  
    let socialPlatformProvider;  
    socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;  
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (socialuser) => {

        console.log("google sign in data : " , socialuser);
       
        this.authService.signInGoogle(socialuser); 

        
      
      })
   //   if (this.signupForm.valid){

     // }
            
      
    

    
  }

}
