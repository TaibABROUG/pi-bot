import { Component,Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData  {
  synonyms: String;
 }
@Component({
  selector: 'app-dialog-synonyms',
  templateUrl: './dialog-synonyms.component.html',
  styleUrls: ['./dialog-synonyms.component.css']
})
export class DialogSynonymsComponent implements OnInit  {
    table = [] ;
    newtable =[] ;
  constructor(public dialogRef: MatDialogRef<DialogSynonymsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { 
    console.log("sys =" , this.data.synonyms) ;
    this.table = this.data.synonyms.split("||");
    this.newtable = this.data.synonyms.split("||");

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
