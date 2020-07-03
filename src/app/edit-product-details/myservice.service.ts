import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  public fullname: any;
  serviceData: any;
  title : any;
  id: any;
  price: any;
  product_quantity: any;
  product_description: any;
  url: any;
  constructor(private http: HttpClient) { }

  set fullName(newName: any) {
    this.fullname = newName;
  }

  get fullName(): any {
    return this.fullname;
  }

  update_product(data) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    return this.http.put('http://localhost:5050/posts/' + data.id, {
      "id": data.id,
      "title": data.title,
      "Price": data.Price,
      "url": data.url,
      "product_quantity": data.product_quantity,
      "product_description": data.product_description
    } , httpOptions);
  }

  get_comments(id: any) {
    return this.http.get('http://localhost:5050/comments?productId=' + id);
  }

  public setp(v : any) {
    this.serviceData = v;
  }
  
  public getp(){
    return this.serviceData;
  }

    public settitle(v: any){
    this.title = v
  }

public gettitle(){
  return this.title
}

public setid(v: any){
  // console.log('ID I M SETTING IS ', v)
  this.id = v
}

public getid(){
  // console.log(this.id)
return this.id;
}

public setPrice(v: any){
  this.price = v
}

public getPrice(){
return this.price;
}

public setproduct_quantity(v: any){
  this.product_quantity = v
}

public getproduct_quantity(){
return this.product_quantity;
}


public setproduct_description(v: any){
  this.product_description = v
}

public getproduct_description(){
return this.product_description;
}



public seturl(v: any){
this.url = v
}

public geturl(){
  return this.url
}


}
