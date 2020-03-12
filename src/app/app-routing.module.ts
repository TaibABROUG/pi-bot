import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';


const routes: Routes = [{
  path: '', loadChildren:()=> import ('./moduels/authentication/authentication.module').then(m=> m.AuthenticationModule),},
{ path: 'auth', loadChildren:()=> import ('./moduels/authentication/authentication.module').then(m=> m.AuthenticationModule),},

// { path: 'profileid/agent/intents', loadChildren:()=> import ('./moduels/agent/agent.module').then(m=> m.AgentModule),},
// { path: 'profileid/agent/entities', loadChildren:()=> import ('./moduels/agent/agent.module').then(m=> m.AgentModule),},
// { path: 'profileid/agent/knowledges', loadChildren:()=> import ('./moduels/agent/agent.module').then(m=> m.AgentModule),},
// { path: 'profileid/agent/database', loadChildren:()=> import ('./moduels/agent/agent.module').then(m=> m.AgentModule),},
{  path: 'user-profile/:id', loadChildren:()=> import ('./moduels/profile/profile.module').then(m=> m.ProfileModule), canActivate: [AuthGuard]}, 
{  path: ':id_user', loadChildren:()=> import ('./moduels/profile/profile.module').then(m=> m.ProfileModule), canActivate: [AuthGuard]}, 
{path: ':id_user/:id_agent', loadChildren:()=> import ('./moduels/agent/agent.module').then(m=> m.AgentModule) , canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
