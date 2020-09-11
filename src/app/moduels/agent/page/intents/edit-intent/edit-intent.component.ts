import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Intent } from "src/app/shared/models/intent";
import { AgentService } from "src/app/core/services/agent.service";
import { IntentContent } from "src/app/shared/models/intentContent";
import { IntentService } from "src/app/core/services/intent.service";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogSynonymsComponent } from './dialog-synonyms/dialog-synonyms.component';
import { DialogAnswersComponent } from './dialog-answers/dialog-answers.component';
@Component({
  selector: "app-edit-intent",
  templateUrl: "./edit-intent.component.html",
  styleUrls: ["./edit-intent.component.css"],
})
export class EditIntentComponent implements OnInit {
  intent: Intent = new Intent();
  currentIntent: Object = {};
  id_intent: String;
  listDescIntent: String[];
  id_user: String;
  id_agent: String;
  addItem: String = "";
  synonymes: String = "";
  tabsynonymes: String[];
  tabanswers : String[] ; 
  answers: String ; 
  keyon: String = "";
  keyonanswer: String = "";
  
  constructor(public dialog: MatDialog,
    private actRoute: ActivatedRoute,
    public agentServer: AgentService,
    private intentService: IntentService
  ) {
    this.id_intent = this.actRoute.snapshot.paramMap.get("id_intent");
    this.id_user = this.actRoute.snapshot.paramMap.get("id_user");
    this.id_agent = this.actRoute.snapshot.paramMap.get("id_agent");
    this.intentService
      .getIntent(this.id_intent, this.id_user, this.id_agent)
      .subscribe((res) => {
        this.intent = res;
        console.log("content intent= " + res);
        console.log("content intent= " + res.content);
      });
    this.getListDescIntent();
  }
  onKey(event: any) {
    this.keyon = event.target.value;
    console.log(this.keyon[this.keyon.length - 1]);
    let lastkey = this.keyon[this.keyon.length - 1];
    if (lastkey == "||") {
      console.log("do the work ");
    }
    this.tabsynonymes = this.keyon.split("||");
  }
  onKeyAnswer(event: any) {
    this.keyonanswer = event.target.value;
    console.log(this.keyonanswer[this.keyon.length - 1]);
    let lastkey = this.keyonanswer[this.keyonanswer.length - 1];
    if (lastkey == "||") {
      console.log("do the work ");
    }
    this.tabanswers = this.keyonanswer.split("||");
  }
  onClickDeleteSynonyme(j: number) {
    this.tabsynonymes.splice(j, 1);
    this.synonymes = this.tabsynonymes.toString();
  }
  onClickDeleteAnswer(j: number){
    this.tabanswers.splice(j,1)  ; 
    this.answers = this.tabanswers.toString() ; 

  }
  ngOnInit() {}
  onAddClicked() {
    this.intent.content.push({  rank : 0 , desc: this.addItem , synonymes: this.synonymes   , answers: this.answers});
    this.addItem = "";
    this.tabsynonymes = [];
    this.synonymes = "" ; 
    this.tabanswers = [] ; 
    this.answers = "" ; 
  }
  sauvgardsyn(event, i: number) {
    console.log(event.target.value);
    console.log(i);
    this.intent.content[i].synonymes = event.target.value;
  }
  sauvgardans(event, i: number) {
    console.log(event.target.value);
    console.log(i);
    this.intent.content[i].answers = event.target.value;
  }
  onDeleteClicked(id: number) {
    console.log(id);
    this.intent.content.splice(id, 1);
  }
  disabled(): Boolean {
    return this.synonymes == "" ||this.addItem == ""|| this.answers =="";
  }
  getListDescIntent() {}
  onSaveClicked() {
    this.intentService
      .updateIntent(this.id_user, this.id_agent, this.id_intent, this.intent)
      .subscribe((res) => {
        console.log("subs" + res);
      });
    console.log("done update");
  }
  sauvgard(event, i: number) {
    console.log(event.target.value);
    console.log(i);
    this.intent.content[i].desc = event.target.value;
  }
  openDialog(j): void {
    const dialogRef = this.dialog.open(DialogSynonymsComponent, {
      disableClose: false,
      width: '500px',
      maxHeight: '500px' ,
      data: { synonyms: this.intent.content[j].synonymes}
    });
    console.log("icciiii", this.intent.content[j].synonymes);
    
    dialogRef.afterClosed().subscribe(result => {
      if ( result) {
        this.intent.content[j].synonymes= result ; 
      }
      console.log("closed with " , result);
    

      console.log(result);
      

    });
    
}
openDialogAnswers(j): void {
  const dialogRef = this.dialog.open(DialogAnswersComponent, {
    disableClose: false,
    width: '500px',
    maxHeight: '500px' ,
    data: { answers: this.intent.content[j].answers}
  });
  console.log("icciiii", this.intent.content[j].answers);
  
  dialogRef.afterClosed().subscribe(result => {
    if ( result) {
      this.intent.content[j].answers= result ; 
    }
    console.log("closed with " , result);
  

    console.log(result);
    

  });
  
}
}