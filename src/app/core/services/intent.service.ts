import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError, from } from 'rxjs';
 import { catchError, map } from 'rxjs/operators';
import { Intent } from 'src/app/shared/models/intent';


@Injectable({
  providedIn: 'root'
})
export class IntentService {
  endpoint: string = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient,
    public router: Router) { }
  updateIntent(id_user : String,id_agent:String , id_intent: String , intent : Intent)
  {for(let i of intent.content){
    console.log(i.desc);
  }
    return this.http.put(`${this.endpoint}/intents/updateintent/${id_user}/${id_agent}/${id_intent}`, intent , { headers: { 'Content-Type': 'application/json' } }).pipe(map(res => res));

  }


 
  addIntent(intent: Intent, id_agent:String , id_user:String):Observable<any>{
    console.log(intent.name +" " +id_agent +" " +  id_user) ; 
    return this.http.post<any>(`${this.endpoint}/intents/addintent`, { name: intent.name, id_agent: id_agent, content: []}).pipe(catchError(this.handleError));

;}


  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  };





  public getAllIntents(id_agent:String ,id_user:String):Observable <Intent[]>{  

     return this.http.get(`${this.endpoint}/intents/getallintents/${id_user}/${id_agent}`).pipe(
     map(res => res)).pipe(
      map(res => <Intent[]>res));
 };


  deleteIntent(id_intent: String , id_agent:String , id_user:String) {
    return this.http.delete(`${this.endpoint}/intents/deleteintent/${id_user}/${id_agent}/${id_intent}`, { headers: this.headers }).pipe(map(res => res));

  }
  
    
  public getIntent(id_intent:String  ,id_user: String  ,id_agent : String) :Observable<any> {
    const api = `${this.endpoint}/intents/getintent/${id_user}/${id_agent}/${id_intent}`;
    console.log(api) ; 

    return this.http.get(api ,  { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  
}
