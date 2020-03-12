import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { PageComponent } from './page/page.component';
import { HomeComponent } from './page/home/home.component';
import { StaticsComponent } from './page/statics/statics.component';
import { SettingsComponent } from './page/settings/settings.component';
import{SharedModule} from 'src/app/moduels/shared/shared.module'
import { NavBarComponent } from 'src/app/shared/components/profile/nav-bar/nav-bar.component';
import { from } from 'rxjs';
import { RouterModule } from '@angular/router';
import { DialogDataComponent } from './page/home/dialog-data/dialog-data.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';


@NgModule({
  declarations: [PageComponent, HomeComponent, StaticsComponent, SettingsComponent, DialogDataComponent ],
  imports: [RouterModule,
    CommonModule,
    ProfileRoutingModule,SharedModule
  ], 
  entryComponents: [DialogDataComponent],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}],
})
export class ProfileModule { }
