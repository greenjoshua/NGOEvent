import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _url: string = "http://localhost:3001/events";
  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event> {
    return this.http.get<Event>(this._url)
    .pipe(catchError(this.errorHandler));
  }

  getEventById(id: string): Observable<Event> {
    return this.http.get<Event>(this._url + '/' + id)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }
}
