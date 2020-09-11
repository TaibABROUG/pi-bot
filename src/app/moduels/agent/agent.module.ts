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
import { EditIntentComponent } from './page/intents/edit-intent/edit-intent.component';
import { EditEntitieComponent } from './page/entities/edit-entitie/edit-entitie.component';
import { ReactiveFormsModule } from '@angular/forms';
import {FileSelectDirective} from 'ng2-file-upload';
import { from } from 'rxjs';
import { DialogSynonymsComponent } from './page/intents/edit-intent/dialog-synonyms/dialog-synonyms.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { DialogAnswersComponent } from './page/intents/edit-intent/dialog-answers/dialog-answers.component';
@NgModule({
  declarations: [
    PageComponent,
    IntentsComponent, 
    EntitiesComponent,
    KnowledgeComponent,
    DatabaseComponent,
    EditIntentComponent,
    EditEntitieComponent,
    FileSelectDirective,
    DialogSynonymsComponent,
    DialogAnswersComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AgentRoutingModule,
    SharedModule,RouterModule
  ],
  entryComponents: [DialogSynonymsComponent , DialogAnswersComponent],

 // providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}],
})
export class AgentModule { }
