import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { Router} from '@angular/router';
import { v4 as uuid } from 'uuid';
import { BehaviorSubject, Observable } from 'rxjs';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // animations:[
  //   trigger('fade',)
  // ]
})
export class HeaderComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;
  submitted = false;
  error: boolean;
  loading = false;
  isLoggedin: boolean;
  isAdmin: boolean;
  id: any;
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  headerIcon: any;

  @ViewChild('closeAddExpenseModal', {static: false}) closeAddExpenseModal: ElementRef;

  constructor( private formBuilder: FormBuilder, private myservice: MyserviceService, private  router: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      id: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email], this.myservice.userValidator()],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    });

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.headerIcon = JSON.parse(sessionStorage.getItem('header_comp'));
    const myuser = localStorage.getItem('current_user');

    const result = (myuser == ('admin' || 'normal')) ? 'admin' : 'null';
    if (result == null) {
      this.isLoggedin = true;
    } else {
      this.isLoggedin = false;
    }
    this.error = false;
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onLogin() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      alert('Login Failed');
      return ;
    }
    if (this.loginForm.valid) {
        this.myservice.login(this._v().email, this._v().password)
        .subscribe(
          data => {
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < data.length; i++) {
              if (data[i].email === this._v().email && data[i].password === this._v().password) {
                // tslint:disable-next-line:triple-equals
                  if (this._v().email == '@admin' && this._v().password == 'password') {
                    this.isLoggedin = true;
                    this.isAdmin = true;
                    localStorage.setItem('current_user', 'admin');                    
                    // this.myservice.setp(mydata);
                    this.myservice.setfirstName('@admin');
                    this.myservice.setlastName('@admin last name');
                    this.myservice.setemail('@admin');
                    this.myservice.setaddress('@admin');
                    this.myservice.setmobile(9898);
                    this.myservice.check_login(true);
                    setTimeout( () => {
                      this.closeAddExpenseModal.nativeElement.click();
                    }, 1000);
                    this.ngOnInit();
                    this.loginForm.reset();
                  } else {
                    this.isLoggedin = true;
                    sessionStorage.setItem('user_id', JSON.stringify(data[i]));
                    localStorage.setItem('current_user', 'normal');
                   // sessionStorage.setItem('current_user', 'normal');
                    this.myservice.check_login(true);
                    this.ngOnInit();
                    setTimeout( () => {
                      this.closeAddExpenseModal.nativeElement.click();
                    }, 2000);
                    this.loginForm.reset();
                  }
              }
            }
          },
          error => {
            this.error = error;
            this.loading = false;
            alert('Login Failed');
          });
    }

  }

  onRegister() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      console.log('Error Found');
      return ;
    }

    this.id = uuid();
    this.registerForm.controls.id.setValue(this.id);
    this.myservice.register2(this.registerForm.value).subscribe(data => {
      alert('Registration Successful');
      sessionStorage.setItem('user_id', JSON.stringify(data));

        localStorage.setItem('current_user', 'normal');
      this.myservice.check_login(true);
      setTimeout( () => {
        this.closeAddExpenseModal.nativeElement.click();
      }, 1000);
      this.ngOnInit();
      }, error => {
      console.log('Error Occured!', error);
    } );
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

   _v() {
    return this.loginForm.value;
  }


  signout() {
  // this.myservice.check_login(false);
  localStorage.clear();
  sessionStorage.clear();
  this.isAdmin = false;
  setTimeout(() => {
    this.ngOnInit();
    alert('Successfully Logged Out !..');
    this.router.navigate(['/']);
  }, 1500);
  }
}

