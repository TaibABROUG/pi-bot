import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavLeftComponent } from './shared/components/agent/nav-left/nav-left.component';
import { TestBotComponent } from './shared/components/agent/test-bot/test-bot.component';
import { NavBarComponent } from './shared/components/profile/nav-bar/nav-bar.component';
import { AgentRoutingModule } from './moduels/agent/agent-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/authconfig.interceptor';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import {SocialLoginModule,
AuthServiceConfig,
GoogleLoginProvider,
FacebookLoginProvider,
AuthService} from "angular-6-social-login";


export function getAuthServiceConfigs() {
let config = new AuthServiceConfig(
    [
      
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("859553597940-qmdlhq26otj87ndjep3pfkkprpvq6afd.apps.googleusercontent.com")
      }
       
    ]
);
return config;
}


@NgModule({
  declarations: [
    AppComponent,
 
    
  
  ],
  imports: [
  


    HttpClientModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule, 
    SocialLoginModule,
  
  
  ],
  providers: [   AuthService , 
    {provide: HTTP_INTERCEPTORS , useClass: AuthInterceptor , multi:true} ,
    {
   
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  } ],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
