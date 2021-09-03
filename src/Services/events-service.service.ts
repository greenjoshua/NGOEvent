import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

//const cors = require('../cors/cors');

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _url: string = "http://localhost:8080/events";
  // httpOptions: any = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': "*"
  //   })
  // };

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event> {
    return this.http.get<Event>(this._url)
    .pipe(catchError(this.errorHandler));
  }

  getEventById(id: string): Observable<Event> {
    return this.http.get<Event>(this._url + '/' + id)
    .pipe(catchError(this.errorHandler));
  }

  updateEvent(id: string, empData: any): Observable<Event> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };

    console.log("Results from put in eventService");
    console.log(empData);
    console.log(this._url + '/' + id);
    return this.http.put<Event>(this._url + '/' + id, empData, httpOptions)
    .pipe(catchError(this.errorHandler));
  }

  post(empData: any) {
    console.log(empData);
    console.log("Results from post");
    return this.http.post<Event>(this._url, empData)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }
}