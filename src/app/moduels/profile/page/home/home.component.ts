import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogDataComponent } from './dialog-data/dialog-data.component';
import { AgentService } from 'src/app/core/services/agent.service';
import { Agent } from 'src/app/shared/models/agent';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';


export interface DialogData {

  name: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  agent: Agent = new Agent();
  currentUser: Object = {};
  id: String;
  name: String;
  submit: Boolean;

  listAgent: Agent[] = [];
  constructor(public dialog: MatDialog,
    private agentService: AgentService,
    public authService: AuthService,
    private actRoute: ActivatedRoute,
    public router: Router) {
    this.id = this.actRoute.snapshot.paramMap.get('id_user');
    //  this.id = this.actRoute.snapshot.paramMap.get('id_user');
    this.authService.getUserProfile(this.actRoute.snapshot.paramMap.get('id_user')).subscribe(res => {
      this.currentUser = res.msg;
    });
    console.log('home id user' + this.id);

  }
  ngOnInit() {

    this.loadAllAgent();
  }
  copy( text ){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value =text;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    
  }
  public loadAllAgent() {
    this.agentService.getAllLists(this.id).subscribe((res) => {
      console.log(res);
      this.listAgent = res
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogDataComponent, {
      disableClose: false,
      width: '250px',
      data: { name: this.name,submit: false}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(this.id);

      console.log(result);
      if(result!==undefined){
      if (result.submit && result.name.length>3){
      this.agent.name = result.name;
      this.agentService.addAgent(this.agent, this.id).subscribe((res) => {
        if (res.result) {
          this.loadAllAgent();
          
        }
      });
    }}

    });
  }
  deleteAgent(id_agent: String) {
    console.log('you want delete this agent: ' + id_agent)
    this.agentService.deleteAgent(id_agent).subscribe((res) => {

      this.loadAllAgent();

    })
  }
  navToAgent(id_agent: String) {
    this.router.navigate([this.id + '/' + id_agent]);
  }

}





