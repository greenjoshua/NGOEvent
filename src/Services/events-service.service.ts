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

  // post(empData: any, file: any) {
  //   console.log(empData);
  //   console.log("Results from post");
  //   console.log("File Name is: ");
  //   console.log(file);
  //   const formData: any = new FormData();
  //   const params: any = new HttpParams();
  //   for (const [key, value] of Object.entries(empData)) {
  //     console.log(key, value);
  //     if(key==="eventImage") {
  //       formData.append(key, file);
  //       console.log("Do Nothing");
  //     }else{
  //       formData.append(key, value);
  //     }
  //     // formData.append(key, value);
  //     // if(key=="eventImage"){
  //     //   console.log("Setting Params for file");
  //     //   console.log(file);
  //     //   params.set("eventImage", file);
  //     // }
  //     // else{
  //     //   params.set(key, value);
  //     // }
  //   }

  //   //formData.append("event", empData);
  //   //formData.append("file", file);
  //   //params.set('e', formData);
  //   //formData.append('id', "1");
  //   // params.set('eventName', formData.get('eventName'));
  //   // params.set('eventDescription', formData.get('eventDescription'));
  //   // params.set('category', formData.get('category'));
  //   // params.set('startDate', formData.get('startDate'));
  //   // params.set('endDate', formData.get('endDate'));
  //   // params.set('startTime', formData.get('startTime'));
  //   // params.set('endTime', formData.get('endTime'));
  //   // params.set('location', formData.get('location'));
  //   // params.set('registration', formData.get('registration'));
  //   // params.set('eventImage', file);
  //   // params.set('adultPrice', formData.get('adultPrice'));
  //   // params.set('childPrice', formData.get('childPrice'));
  //   params.set('file', file);
  //   params.set('event', formData);
    
  //   // for(var pair of formData.entries()) {
  //   //   console.log(pair[0] + ',,   '+ pair[1]);
  //   // }
  //   /*
  //   let image = empData.eventImage.split("fakepath\\");
  //   image = image[1];
  //   let tmpData = {...empData, eventImage: "./../assets/images/"+image};
  //   console.log(tmpData);
  //   */

  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type':  'multipart/form-data; boundary=----border----',
  //       'Access-Control-Allow-Origin': '*'
  //     }),
  //     params: {
  //       ["event"] : empData,
  //       ["file"]: file
  //     }
  //   };

  //   //this.http.post(this._url, file);

  //   return this.http.post<Event>(this._url, httpOptions)
  //   .pipe(catchError(this.errorHandler));

  //   /*(
  //     url: this._url,
  //     body: empData,
  //     options: {
  //       http
  //     }
  //   )
  //   */
  // }
  
  /*
    post(url: string, 
     body: any, 
     options: { 
        headers?: HttpHeaders | { [header: string]: string | string[]; }; 
        observe?: "body|events|response|"; 
        params?: HttpParams | { [param: string]: string | string[]; }; 
        reportProgress?: boolean; 
        responseType: "arraybuffer|json|blob|text"; 
        withCredentials?: boolean; 
     }
)
*/

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

  handleFile(file: File) {
    let fileName = "";
      fileName = file.name;
      return this.http.post("./../assets/images/"+fileName, file)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }
}