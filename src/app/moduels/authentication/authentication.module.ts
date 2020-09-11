import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider} from 'angularx-social-login';
// import {
//   SocialLoginModule,
//   AuthServiceConfig,
//   GoogleLoginProvider,
//   FacebookLoginProvider,
// } from "angular-6-social-login";


// export function getAuthServiceConfigs() {
//   let config = new AuthServiceConfig(
//       [
        
//         {
//           id: GoogleLoginProvider.PROVIDER_ID,
//           provider: new GoogleLoginProvider("859553597940-qmdlhq26otj87ndjep3pfkkprpvq6afd.apps.googleusercontent.com")
//         }
         
//       ]
//   );
//   return config;
// }


@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    ReactiveFormsModule, 
    FormsModule ,
    RouterModule,
    FormsModule,
    CommonModule,
    AuthenticationRoutingModule,
  // SocialLoginModule,
  
   
  ],
  // providers: [
    
  //   {
  //     provide: AuthServiceConfig,
  //     useFactory: getAuthServiceConfigs
  //   }
  // ],
  
})
export class AuthenticationModule { }
