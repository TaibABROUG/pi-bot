import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError, from } from 'rxjs';
 import { catchError, map } from 'rxjs/operators';
import { Entitie } from 'src/app/shared/models/entitie';


@Injectable({
  providedIn: 'root'
})
export class entitieService {
  endpoint: string = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient,
    public router: Router) 
    { }
  updateentitie(id_user : String,id_agent:String , id_entitie: String , entitie : Entitie)
  { 
    for(let i of entitie.value){
    console.log(i.name);
  }
    return this.http.put(`${this.endpoint}/entities/updateentitie/${id_user}/${id_agent}/${id_entitie}`, entitie , { headers: { 'Content-Type': 'application/json' } }).pipe(map(res => res));

  }


 
  addentitie(entitie: Entitie, id_agent:String , id_user:String):Observable<any>{
    console.log(entitie.name +" " +id_agent +" " +  id_user) ; 
    return this.http.post<any>(`${this.endpoint}/entities/addentitie`, { name: entitie.name, id_agent: id_agent, value: []}).pipe(catchError(this.handleError));

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





  public getAllentities(id_agent:String ,id_user:String):Observable <Entitie[]>{  

     return this.http.get(`${this.endpoint}/entities/getallentities/${id_user}/${id_agent}`).pipe(
     map(res => res)).pipe(
      map(res => <Entitie[]>res));
 };


  deleteentitie(id_entitie: String , id_agent:String , id_user:String) {
    return this.http.delete(`${this.endpoint}/entities/deleteentitie/${id_user}/${id_agent}/${id_entitie}`, { headers: this.headers }).pipe(map(res => res));

  }
  
    
  public getentitie(id_entitie:String  ,id_user: String  ,id_agent : String) :Observable<any> {
    const api = `${this.endpoint}/entities/getentitie/${id_user}/${id_agent}/${id_entitie}`;
    console.log(api) ; 

    return this.http.get(api ,  { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  
}
