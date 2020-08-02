import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { map, switchMap  } from 'rxjs/operators';
import { Observable, timer } from 'rxjs';
import {Register} from 'ts-node';

const URL = 'http://localhost:5050';

@Injectable({
  providedIn: 'root'
})

export class MyserviceService {
  constructor(private http: HttpClient) { }

  serviceData : any;
  get user(): boolean {
    return this.temp;
  }

  set user(val: boolean) {
    if (val) {
      this.temp = true;
    } else {
      this.temp = false;
    }
  }
  // isLoggedin: boolean;
  temp: boolean;

  check_login(val: boolean) {
      if (val) {
        sessionStorage.setItem('header_comp', 'true');
        return localStorage.getItem('current_user');
      } else {
        sessionStorage.setItem('header_comp', 'false');
        return false;
      }
  }

  login(username: string, password: string) {

    return this.http.get<any>('https://electronicstore-d5621.firebaseio.com/user.json');
   // return this.http.get<any>('http://localhost:5050/user');
  }

  register2(myuser: any) {
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  return this.http.post('https://electronicstore-d5621.firebaseio.com/user.json', myuser , httpOptions);
  //  return this.http.post('http://localhost:5050/user', myuser , httpOptions);
}


  // Aysnc Validation
  searchUser(text) {
    // debounce
    return timer(700)
      .pipe(
        switchMap(() => {
          // Check if username is available
          return this.http.get<any>(`${URL}/user?email=${text}`);
        })
      );
  }

  userValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.searchUser(control.value)
        .pipe(
          map(res => {
            // if username is already taken
            if (res.length) {
              // return error
              return { userNameExists: true};
            }
          })
        );
    };

  }




  
  

  public setfirstName(v: any){
    return this.serviceData = v;
  }

  public getfirstName(){
    return this.serviceData;
  }


  public setlastName(v: any){
    return this.serviceData = v;
  }

  public getlastName(){
    return this.serviceData;
  }


  public setemail(v: any){
    return this.serviceData = v;
  }

  public getemail(){
    return this.serviceData;
  }


  public setaddress(v: any){
    return this.serviceData = v;
  }

  public getaddress(){
    return this.serviceData;
  }

  public setmobile(v: any){
    return this.serviceData = v;
  }

  public getmobile(){
    return this.serviceData;
  }


}
