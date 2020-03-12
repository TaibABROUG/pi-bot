
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//import { DialogDataComponent } from './dialog-data/dialog-data.component';
import { AgentService } from 'src/app/core/services/agent.service';
import { Agent } from 'src/app/shared/models/agent';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Intent } from 'src/app/shared/models/intent';
import { IntentService } from 'src/app/core/services/intent.service';


@Component({
  selector: 'app-intents',
  templateUrl: './intents.component.html',
  styleUrls: ['./intents.component.css']
})
export class IntentsComponent implements OnInit {
  agent: Agent = new Agent();
  currentUser: Object = {};
  id_user: String;
  id_agent: String;
  name: String;
  submit: Boolean;
  intent: Intent=new Intent() ; 

  listIntents: Intent[] = [];
  constructor(public dialog: MatDialog,
    public intentService: IntentService , 
    private agentService: AgentService,
    public authService: AuthService,
    private actRoute: ActivatedRoute,
    public router: Router) {
    this.id_user = this.actRoute.snapshot.paramMap.get('id_user');
    this.id_agent = this.actRoute.snapshot.paramMap.get('id_agent');
    //  this.id = this.actRoute.snapshot.paramMap.get('id_user');
    this.authService.getUserProfile(this.actRoute.snapshot.paramMap.get('id_user')).subscribe(res => {
      this.currentUser = res.msg;
    });
    console.log('home id user' + this.id_user);

  }
  ngOnInit() {

    this.loadAllIntents();
  }
  public loadAllIntents() {
 this.intentService.getAllIntents( this.id_agent , this.id_user).subscribe((res) => {
    //   console.log(res);
      this.listIntents = res;
    });
  }

  deleteIntent(id_intent: String) {
    console.log('you want delete this agent: ' + id_intent)
     this.intentService.deleteIntent(id_intent, this.id_agent , this.id_user ).subscribe((res) => {

      this.loadAllIntents();

    })
  }
  addNewIntent () {
    this.intent.name="new intent" ; 
    this.intentService.addIntent(this.intent , this.id_agent , this.id_user).subscribe((res) => {
      if (res.result) {
        console.log("subs"+res.result._id);
        this.loadAllIntents();
       this.navToIntent(res.result._id);
       
        
      }
    }); ; 
  }
  navToIntent(id_intent: String) {
    
    this.router.navigate([ this.id_user +'/' +this.id_agent+'/intents/'+  id_intent]);
  }

}





