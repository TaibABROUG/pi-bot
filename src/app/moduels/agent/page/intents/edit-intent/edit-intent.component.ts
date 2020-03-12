import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Intent } from 'src/app/shared/models/intent';
import { AgentService } from 'src/app/core/services/agent.service';
import { IntentContent } from 'src/app/shared/models/intentContent';
import { IntentService } from 'src/app/core/services/intent.service';

@Component({
  selector: 'app-edit-intent',
  templateUrl: './edit-intent.component.html',
  styleUrls: ['./edit-intent.component.css']
})
export class EditIntentComponent implements OnInit {
  intent: Intent = new Intent() ; 
  currentIntent: Object = {};
  id_intent : String;
  listDescIntent: String[];
  id_user: String ;
   id_agent: String ;
  addItem: String="" ; 
  constructor(  private actRoute: ActivatedRoute,public agentServer: AgentService , private intentService : IntentService) { 
    this.id_intent = this.actRoute.snapshot.paramMap.get('id_intent');
    this.id_user =  this.actRoute.snapshot.paramMap.get('id_user');
   this.id_agent =  this.actRoute.snapshot.paramMap.get('id_agent');
    this.intentService.getIntent(this.id_intent, this.id_user , this.id_agent).subscribe(res => {
      this.intent = res ; 
      console.log('content intent= ' + res);
      console.log('content intent= ' + res.content);
     
    }) ; 
    this.getListDescIntent();
  }

  ngOnInit() {
  }
  onAddClicked(){
    this.intent.content.push({desc: this.addItem});
    this.addItem="" ; 
  }
  onDeleteClicked(id: number )
  {
    console.log(id);
    this.intent.content.splice(id , 1) ; 
 
    
  }
  disabled():Boolean
   {return this.addItem == "";}
  getListDescIntent()
  {
   
   
  
  }
  onSaveClicked() {
    this.intentService.updateIntent(this.id_user , this.id_agent , this.id_intent , this.intent).subscribe((res) => {
      
        console.log("subs"+res);
        
       
        
      
    });
    console.log('done update' ) ;

  }
  sauvgard(event , i: number) { 
    console.log(event.target.value) ; 
    console.log(i) ; 
    this.intent.content[i].desc = event.target.value  ;

  }

}
