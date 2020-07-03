import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MydataService {

  constructor(private http: HttpClient) { }

  add_comm(data: any , id) {
   data = JSON.stringify(data);
   const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
   return this.http.post('http://localhost:5050/comments', data, httpOptions);
  }

}
