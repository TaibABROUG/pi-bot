import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { StaticsComponent } from './page/statics/statics.component';
import { SettingsComponent } from './page/settings/settings.component';
import { PageComponent } from './page/page.component';


const routes: Routes = [
 {path: '' , component :  PageComponent},
 {path: 'home' , component :  HomeComponent},
 {path: 'statics' , component : StaticsComponent},
 {path: 'settings' , component :  SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
