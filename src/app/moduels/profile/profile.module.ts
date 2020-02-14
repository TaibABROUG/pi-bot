import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { PageComponent } from './page/page.component';
import { HomeComponent } from './page/home/home.component';
import { StaticsComponent } from './page/statics/statics.component';
import { SettingsComponent } from './page/settings/settings.component';
import { NavBarComponent } from 'src/app/shared/components/profile/nav-bar/nav-bar.component';


@NgModule({
  declarations: [PageComponent, HomeComponent, StaticsComponent, SettingsComponent , NavBarComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
