import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
 providedIn: 'root'
})
export class FileService {
 private fileList: string[] = new Array<string>();
 private fileList$: Subject<string[]> = new Subject<string[]>();
 endpoint: string = 'http://localhost:4000/api/knownledge';
 headers = new HttpHeaders().set('Content-Type', 'multipart/form-data');

 constructor(   private http: HttpClient,
  public router: Router) { }

 public upload(formData: FormData) :Observable<any> {
   //this.fileList.push(fileName);
  // this.fileList$.next(this.fileList);
  debugger ;
   console.log("upload work ");
   return this.http.post(this.endpoint+'/upload',formData ,{headers: this.headers,
    responseType:'text'}  ,)


 }
 public  addtomongodb (path :String, id_user: String, id_agent: String):Observable<any>{
   console.log(path , id_user , id_agent) ; 
   return this.http.post<any>('http://localhost:4000/api/knownledge/addtomongodb' ,  { path : path , id_user : id_user , id_agent : id_agent }  ).pipe(
    catchError(this.handleError)
  );
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




 public download(fileName: string): void {

 }

 public remove(fileName): void {
   this.fileList.splice(this.fileList.findIndex(name => name === fileName), 1);
   this.fileList$.next(this.fileList);
 }

 public list(): Observable<string[]> {
   return this.fileList$;
 }

 private addFileToList(fileName: string): void {
   this.fileList.push(fileName);
   this.fileList$.next(this.fileList);
 }
}