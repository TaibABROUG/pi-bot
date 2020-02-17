import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { StaticsComponent } from './page/statics/statics.component';
import { SettingsComponent } from './page/settings/settings.component';
import { PageComponent } from './page/page.component';


const routes: Routes = [
 {path: '' , component :  PageComponent , children:[{path: '' , component: HomeComponent , outlet: 'profilerouter'}]},
 {path: 'home' , component :  PageComponent , children:[{path: '' , component: HomeComponent , outlet: 'profilerouter'}]},
 {path: 'statics' , component : PageComponent , children:[{path: '' , component: StaticsComponent , outlet: 'profilerouter'}] },
 {path: 'settings' , component :  PageComponent , children:[{path: '' , component: SettingsComponent , outlet: 'profilerouter'}] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
