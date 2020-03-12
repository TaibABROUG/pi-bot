import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Agent } from 'src/app/shared/models/agent';
import { Observable, throwError, from } from 'rxjs';
 import { catchError, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AgentService {
  endpoint: string = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient,
    public router: Router) { }



  addAgent(agent: Agent, id: String): Observable<any> {
    console.log(agent + " " + id)
    return this.http.post<any>(`${this.endpoint}/agents/addagent`, { name: agent.name, id_user: id }).pipe(catchError(this.handleError));

  };


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




  public getAllLists(id: String): Observable<Agent[]> {
    console.log('getallagent'+ id) ;
    console.log(this.endpoint+'/'+id+'/agent/getallagent/') ; 
     return this.http.get(`${this.endpoint}/agents/getallagent/${id}`).pipe(
      map(res => res)).pipe(
        map(res => <Agent[]>res));
  };



  deleteAgent(id_agent: String) {
    return this.http.delete(`${this.endpoint}/agents/deleteAgent/${id_agent}`, { headers: this.headers }).pipe(map(res => res));

  }

  
    

  public getAgent(id) :Observable<any> {
    const api = `${this.endpoint}/agent/${id}`;
    console.log(api) ; 

    return this.http.get(this.endpoint +'/agents/getagent/'+id, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }
}
