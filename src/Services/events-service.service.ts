import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { EmbeddedTemplateAst } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

//const cors = require('../cors/cors');

@Injectable({
  providedIn: 'root'
})
export class EventService {
  //private _url: string = "http://localhost:3001/events";
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

  postEvent(empData: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.post<Event>(this._url, empData, httpOptions)
    .pipe(catchError(this.errorHandler));
  }

  postFile(file: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data;boundary=undefined',
        'Access-Control-Allow-Origin': '*'
      })
    };

    let testData:FormData = new FormData();
    testData.append('file', file);

    return this.http.post('http://localhost:8080/uploadFile', testData)
    .pipe(catchError(this.errorHandler));
  }

  delete(id: string) {
    return this.http.delete(this._url + '/' + id);
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }
}