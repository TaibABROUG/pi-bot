
import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { SocialUser } from 'src/app/shared/models/socialUser';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService as AuthGService,GoogleLoginProvider} from 'angular-6-social-login';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  endpoint: string = 'http://localhost:4000/api/auth';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
  errorLogin: boolean= false;

  constructor(
    private http: HttpClient,
    public router: Router,
    private socialAuthService: AuthGService 
  ) {
  }

  // Sign-up
  signUp(user: User): Observable<any> {
    console.log(user);
    let api = `${this.endpoint}/register-user`;
    return this.http.post(api, user)
      .pipe(
        catchError(this.handleError)
      )
  }
  // Sign-up-Google
  signUpGoogle(socialUser): Observable<any> {
    console.log(socialUser);
   
    console.log("gggggg", socialUser)
    let api = `${this.endpoint}/register-gmail-user`;
    return this.http.post(api, socialUser)
      .pipe(
        catchError(this.handleError)
      )
  }
  //signInGoogle
  signInGoogle(socialUser) {
    return this.http.post<any>(`${this.endpoint}/signingmail`, socialUser)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token)
         
        this.getUserProfile(res._id).subscribe((res) => {
          this.currentUser = res;
          this.router.navigate([res.msg._id]);
        })
      },
      error => this.errorLogin = true)
  }

  // Sign-in
  signIn(user: User) {
    return this.http.post<any>(`${this.endpoint}/signin`, user)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token)
         
        this.getUserProfile(res._id).subscribe((res) => {
          this.currentUser = res;
          this.router.navigate([res.msg._id]);
        })
      },
      error => this.errorLogin = true)
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
    this.socialAuthService.signOut()
     
      this.router.navigate(['login']);
    }
  }

  //User profile
  getUserProfile(iduser: String): Observable<any> {
  // console.log(id);
    const api = `${this.endpoint}/user-profile/${iduser}`;
    console.log(api) ; 

    return this.http.get(this.endpoint +'/user-profile/'+iduser, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  // Error 
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
  }
}