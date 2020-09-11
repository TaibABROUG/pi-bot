import { Component,Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData  {
  answers: String;
 }
@Component({
  selector: 'app-dialog-answers',
  templateUrl: './dialog-answers.component.html',
  styleUrls: ['./dialog-answers.component.css']
})
export class DialogAnswersComponent implements OnInit {

  table = [] ;
  newtable =[] ;
constructor(public dialogRef: MatDialogRef<DialogAnswersComponent>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData) { 
  console.log("sys =" , this.data.answers) ;
  this.table = this.data.answers.split("||");
  this.newtable = this.data.answers.split("||");

  }

ngOnInit() {
}
onClickUpdate(): void {
  
  this.dialogRef.close( this.newtable.join('||') );
  console.log(this.newtable.join('||'))  ; 
}
onDeleteClicked(i: number) {
  console.log(i);
  this.newtable.splice(i,1,);
  this.table.splice(i,1,);
}
addSynon(){
  this.newtable.push("") ; 
  this.table.push("") ; 
}
}
