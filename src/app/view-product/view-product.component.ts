import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule} from '@angular/forms';
import { ProductServiceService } from '../product/product-service.service';
import { MydataService } from './mydata.service'
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  name = 'Angular';
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;
  count = 1;
  constructor(private fb: FormBuilder, private serviceproduct: ProductServiceService, private service: MydataService) { }
  data: any;
  submitted = false;
  public evaluate: boolean;
  public evaluate1: boolean;
  submitComm: FormGroup;
  tocheck: boolean;
title;
// temp= true;

  ngOnInit() {
    this.data = this.serviceproduct.getp();
    this.evaluate = false;
    this.evaluate1 = true;
    const d = Date();
            
         this.submitComm = this.fb.group({
        username: ['', Validators.required],
        email: ['', [ Validators.required, Validators.email]],
        comments: ['', Validators.required],
        productTitle: this.data.title,
        productId: this.data.id,
        timeStamp: d.toString()
      });  
    
  }

  forprod() {
    this.evaluate = false;
    this.evaluate1 = true;
  }

  forrev() {
    this.evaluate = true;
    this.evaluate1 = false;
  }

  countStar(star) {
    star = 4 ;
    this.selectedValue = star;
  }

  reduce() {
    if (this.count < 2) {
    } else {
      this.count = this.count - 1;
    }
  }

  increase() {
    this.count = this.count + 1;
  }

  get f() { return this.submitComm.controls; }

  submitComments() {
    this.submitted = true;

    if (this.submitComm.invalid) {
      return;
    }
    this.tocheck = true;
    this.service.add_comm(this.submitComm.value, this.data.id)
      .subscribe(data => {
      console.log('Success');
    }, error1 => {
      console.log('Error', error1);
    })
    ;
  }
}
