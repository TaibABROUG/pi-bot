import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';
import { IntentsComponent } from './page/intents/intents.component';
import { KnowledgeComponent } from './page/knowledge/knowledge.component';
import { DatabaseComponent } from './page/database/database.component';
import { EntitiesComponent } from './page/entities/entities.component';
import { EditIntentComponent } from './page/intents/edit-intent/edit-intent.component';
import { EditEntitieComponent } from './page/entities/edit-entitie/edit-entitie.component';


const routes: Routes = [
  {path :'', component: PageComponent ,children: [   {path :'', component: IntentsComponent ,outlet: 'agentrouter'  },] },
  {path :'intents/:id_intent', component: PageComponent ,children: [   {path :'', component: EditIntentComponent ,outlet: 'agentrouter'  },] },
  {path :'intents', component: PageComponent ,children: [   {path :'', component: IntentsComponent ,outlet: 'agentrouter'  },] },
  {path :'entities/:id_entitie', component: PageComponent ,children: [   {path :'', component: EditEntitieComponent ,outlet: 'agentrouter'  },] },
  {path :'entities', component: PageComponent ,children: [   {path :'', component: EntitiesComponent ,outlet: 'agentrouter'  },] },
  {path :'database', component: PageComponent ,children: [   {path :'', component: DatabaseComponent ,outlet: 'agentrouter'  },] },
  {path :'knowledges', component: PageComponent ,children: [   {path :'', component: KnowledgeComponent ,outlet: 'agentrouter'  },] },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
