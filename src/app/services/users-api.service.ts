import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from "rxjs";
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  port = 3000;
  // baseUrl = `http://localhost:${this.port}/users`;
  baseUrl = `https://my-json-server.typicode.com/FeedInc/high-life-fe-app/users`;

  //pass automatically to attribute. Generate 2 instances the value you pass and the value yo get.
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      console.log(`An error ocurred: ${error.error.message}`)
    }
    else {
      console.error( `API returns code ${error.status}, body was: ${error.error}`);
    }
    return throwError(() => new Error(`Something happened with request, please try again later`));
  }

  getAllUsers() {
    return this.http.get(this.baseUrl, this.httpOptions);
  }

  getUser(idValue: string) {
    return this.http.get(`${this.baseUrl}/${idValue}`, this.httpOptions);
  }

  createUser(newUser: any) {
    return this.http.post(`${this.baseUrl}`, JSON.stringify(newUser) ,this.httpOptions)
  }

  updateUser(idValue: string, userUpdate: any) {
    return this.http.put(`${this.baseUrl}?id.value=${idValue}`, JSON.stringify(userUpdate), this.httpOptions)
  }

  deleteUser(idValue: string) {
    return this.http.delete(`${this.baseUrl}?id.value=${idValue}`, this.httpOptions)
  }
}
