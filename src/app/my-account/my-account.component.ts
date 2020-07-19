import { Component, OnInit,Input  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { MyserviceService} from '../header/myservice.service'

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  name = 'Angular';
  dashboard: boolean;
  order: boolean;
  email: any;
  lastName: any;
  mobile: any;
  try_me: any;
  f: any;
  onSubmit:any;
  evaluate: any;
  evaluate1: any;
  edit_account: boolean;
  edit_address: boolean;
  user_info: boolean;
  mydata: any;
  registerForm: FormGroup;
  edit_account_form: FormGroup;
  submitted = false;
  firstName: any;
  @Input() nameForm: FormGroup;

  ngOnInit() {
    this.dashboard = true;
    this.registerForm = this.formBuilder.group({
      z: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      address: ['', Validators.required]
    });

    this.edit_account_form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      });
    // this.mydata = JSON.parse(sessionStorage.getItem('user_id'));
    // this.mydata = this.service.getp();
    this.firstName= this.service.getfirstName();
    email: this.service.getemail();
    address : this.service.getaddress();
    lastName: this.service.getlastName();
    mobile: this.service.getmobile();
    
  }

  constructor(private formBuilder: FormBuilder, private router: Router, private service: MyserviceService) { }

  dashboard_view() {
    this.dashboard = true;
    this.order = false;
    this.edit_account =  false;
    this.edit_address = false;
    this.user_info = false;
  }

  order_view() {
    this.dashboard = false;
    this.order = true;
    this.edit_account =  false;
    this.edit_address = false;
    this.user_info = false;
  }
  edit_account_view() {
    this.dashboard = false;
    this.order = false;
    this.edit_account =  true;
    this.edit_address = false;
    this.user_info = false;
  }

  edit_address_view() {
    this.dashboard = false;
    this.order = false;
    this.edit_account =  false;
    this.edit_address = true;
    this.user_info = false;
  }

  user_view() {
    this.dashboard = false;
    this.order = false;
    this.edit_account =  false;
    this.edit_address = false;
    this.user_info = true;
  }

 }
