import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject, Observable, throwError } from "rxjs";
import { Router } from "@angular/router";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";

import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class DatabaseService {
  file = "";
  constructor(private http: HttpClient, public router: Router) {}
  loading_file(): Observable<any> {
    let endpoint = "http://localhost:4000/api/database/loading";
    console.log(endpoint);
    return this.http
      .get(endpoint, {
        headers: new HttpHeaders().set("Content-Type", "application/json"),
      })
      .pipe(
        map((res: Response) => {
          return res || {};
        }),
        catchError(this.handleError)
      );
  }
  save_file(text: String) {
    console.log(text);
    return this.http
      .post<any>("http://localhost:4000/api/database/update", { text: text })
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let msg = "";
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
