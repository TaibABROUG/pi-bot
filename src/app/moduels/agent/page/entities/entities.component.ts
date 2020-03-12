
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//import { DialogDataComponent } from './dialog-data/dialog-data.component';
import { AgentService } from 'src/app/core/services/agent.service';
import { Agent } from 'src/app/shared/models/agent';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Entitie } from 'src/app/shared/models/entitie';
import { entitieService } from 'src/app/core/services/entitie.service';


@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.css']
})
export class EntitiesComponent implements OnInit {
  agent: Agent = new Agent();
  currentUser: Object = {};
  id_user: String;
  id_agent: String;
  name: String;
  submit: Boolean;
  entitie: Entitie=new Entitie() ; 

  listentities: Entitie[] = [];
  constructor(public dialog: MatDialog,
    public entitieService: entitieService , 
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

    this.loadAllentities();
  }
  public loadAllentities() {
 this.entitieService.getAllentities( this.id_agent , this.id_user).subscribe((res) => {
    //   console.log(res);
      this.listentities = res;
    });
  }

  deleteentitie(id_entitie: String) {
    console.log('you want delete this agent: ' + id_entitie)
     this.entitieService.deleteentitie(id_entitie, this.id_agent , this.id_user ).subscribe((res) => {

      this.loadAllentities();

    })
  }
  addNewentitie () {
    this.entitie.name="new entitie" ; 
    this.entitieService.addentitie(this.entitie , this.id_agent , this.id_user).subscribe((res) => {
      if (res.result) {
        console.log("subs"+res.result._id);
        this.loadAllentities();
       this.navToentitie(res.result._id);
       
        
      }
    }); ; 
  }
  navToentitie(id_entitie: String) {
    
    this.router.navigate([ this.id_user +'/' +this.id_agent+'/entities/'+  id_entitie]);
  }

}





