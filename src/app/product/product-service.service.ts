import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  serviceData: string = "";
  constructor(private http: HttpClient) { }
  

  get_products() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
      })
    };
    return this.http.get('https://electronicstore-d5621.firebaseio.com/posts.json', httpOptions);
  }

  delete_products(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    const url = `https://electronicstore-d5621.firebaseio.com/posts${id}.json`
    //const url = `http://localhost:5050/posts/${id}`;
    console.log(url);
    return this.http.delete(url, httpOptions);
  }

  add_product(data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
      return this.http.post('https://electronicstore-d5621.firebaseio.com/posts.json',data, httpOptions)
  //  return this.http.post('http://localhost:5050/posts', data , httpOptions);
  }


  
  public setp(v : any) {
    
    this.serviceData = v;
  }
  
  public getp(){
    return this.serviceData;
  }



}
