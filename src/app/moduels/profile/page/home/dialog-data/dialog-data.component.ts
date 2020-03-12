import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData {
  name: String;
  submit: Boolean;
}
@Component({
  selector: 'app-dialog-data',
  templateUrl: './dialog-data.component.html',
  styleUrls: ['./dialog-data.component.css']
})
export class DialogDataComponent {

  constructor(public dialogRef: MatDialogRef<DialogDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.data.submit = false;
    this.data.name = "";
  }


  onNoClick(): void {
    this.dialogRef.close();
  }
  submitActive() {
    this.data.submit = true;
  }
  disablebtn() {
    return this.data.name.length < 3;
  }

}
