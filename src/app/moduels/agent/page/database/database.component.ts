import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { DatabaseService } from 'src/app/core/services/database.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {
 server_file = '' ; 
 text_file='' ;
  constructor(  public databaseservice: DatabaseService,
    private actRoute: ActivatedRoute) { this.databaseservice.loading_file().subscribe(res => {
      this.server_file= res;
      this.text_file = res; 

    })
   }
 
  ngOnInit() {
  }
  saveFile () {this.databaseservice.save_file(this.text_file).subscribe((res)=>{console.log(res) ;});
   
        
      }
 

}
