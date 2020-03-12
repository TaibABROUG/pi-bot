import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgentService } from 'src/app/core/services/agent.service';

@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.css']
})
export class NavLeftComponent implements OnInit {
  id_user : String ; 
  id_agent: String ; 
  name_agent: String="" ; 

  constructor( private actRoute: ActivatedRoute,public agentService:AgentService) { 
    this.id_user = this.actRoute.snapshot.paramMap.get('id_user') ; 
    this.id_agent = this.actRoute.snapshot.paramMap.get('id_agent') ; 
   this.agentService.getAgent(this.id_agent).subscribe(res => {
     
    this.name_agent= res.name;
   });

  }

  ngOnInit() {
  }

}
