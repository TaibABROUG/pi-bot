import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Entitie } from 'src/app/shared/models/entitie';
import { AgentService } from 'src/app/core/services/agent.service';
import { EntitieValue } from 'src/app/shared/models/entitieValue';
import { entitieService } from 'src/app/core/services/entitie.service';

@Component({
  selector: 'app-edit-entitie',
  templateUrl: './edit-entitie.component.html',
  styleUrls: ['./edit-entitie.component.css']
})
export class EditEntitieComponent implements OnInit {
  entitie: Entitie = new Entitie() ; 
  currententitie: Object = {};
  id_entitie : String;
  listDescentitie: String[];
  id_user: String ;
   id_agent: String ;
  synonymes: String="" ; 
  value_name: String="" ; 
  value: EntitieValue[] ; 
  constructor( 
     private actRoute: ActivatedRoute,
     public agentServer: AgentService ,
     private entitieService : entitieService) { 
    this.id_entitie = this.actRoute.snapshot.paramMap.get('id_entitie');
    this.id_user =  this.actRoute.snapshot.paramMap.get('id_user');
   this.id_agent =  this.actRoute.snapshot.paramMap.get('id_agent');
    this.entitieService.getentitie(this.id_entitie, this.id_user , this.id_agent).subscribe(res => {
      this.value= res.value 
      this.entitie = res ;
      for (let  i of this.value) {
        console.log(i.name) ; 
      }
       this.value= res.value ; 
      console.log('content entitie= ' + res);
      console.log('content entitie= ' + res.value.length);
     
    }) ; 
    this.getListDescentitie();
  }

  ngOnInit() {
  }
  onAddClicked(){
    this.entitie.value.push({name: this.value_name,synonymes : this.synonymes });
    this.synonymes="" ; 
  }
  onDeleteClicked(id: number )
  {
    console.log(id);
    this.entitie.value.splice(id , 1) ; 
 
    
  }
  disabled():Boolean
   {return this.synonymes == "" || this.value_name=="";}
  getListDescentitie()
  {
   
   
  
  }
  onSaveClicked() {
    this.entitieService.updateentitie(this.id_user , this.id_agent , this.id_entitie , this.entitie).subscribe((res) => {
      
        console.log("subs"+res);
        
       
        
      
    });
    console.log('done update' ) ;

  }
  sauvgardvalue(event , i: number) { 
    console.log(event.target.value) ; 
    console.log(i) ; 
    this.entitie.value[i].name = event.target.value  ;

  }
  sauvgardsyn(event , i: number) { 
    console.log(event.target.value) ; 
    console.log(i) ; 
    this.entitie.value[i].synonymes = event.target.value  ;

  }
}
