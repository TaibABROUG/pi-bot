import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavLeftComponent } from './shared/components/agent/nav-left/nav-left.component';
import { TestBotComponent } from './shared/components/agent/test-bot/test-bot.component';
import { NavBarComponent } from './shared/components/profile/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavLeftComponent,
    TestBotComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
