import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  serviceData: string = "";
  constructor(private http: HttpClient) { }
  

  get_products() {
    return this.http.get('http://localhost:5050/posts');
  }

  delete_products(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    const url = `http://localhost:5050/posts/${id}`;
    console.log(url);
    return this.http.delete(url, httpOptions);
  }

  add_product(data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post('http://localhost:5050/posts', data , httpOptions);
  }


  
  public setp(v : any) {
    
    this.serviceData = v;
  }
  
  public getp(){
    return this.serviceData;
  }



}
