import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { PageComponent } from './page/page.component';
import { IntentsComponent } from './page/intents/intents.component';
import { EntitiesComponent } from './page/entities/entities.component';
import { KnowledgeComponent } from './page/knowledge/knowledge.component';
import { DatabaseComponent } from './page/database/database.component';


@NgModule({
  declarations: [PageComponent, IntentsComponent, EntitiesComponent, KnowledgeComponent, DatabaseComponent],
  imports: [
    CommonModule,
    AgentRoutingModule
  ]
})
export class AgentModule { }
