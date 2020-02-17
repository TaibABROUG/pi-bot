import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { PageComponent } from './page/page.component';
import { IntentsComponent } from './page/intents/intents.component';
import { EntitiesComponent } from './page/entities/entities.component';
import { KnowledgeComponent } from './page/knowledge/knowledge.component';
import { DatabaseComponent } from './page/database/database.component';
import { NavBarComponent } from 'src/app/shared/components/profile/nav-bar/nav-bar.component';
import { NavLeftComponent } from 'src/app/shared/components/agent/nav-left/nav-left.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [PageComponent, IntentsComponent, EntitiesComponent, KnowledgeComponent, DatabaseComponent],
  imports: [
    CommonModule,
    AgentRoutingModule,
    SharedModule,RouterModule
  ]
})
export class AgentModule { }
