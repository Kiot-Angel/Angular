import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ProductServiceService } from '../product-service.service';
import { trigger, state, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-myproduct',
  templateUrl: './myproduct.component.html',
  styleUrls: ['./myproduct.component.css'],
  animations:[
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0}),
        animate(1500)
      ])
    ])
  ]
})
export class MyproductComponent implements OnInit {
  data: any;
  sortedData: any = [];
  isDesc: boolean;
  column: string = 'Price';
  selectedDay: string = '';
  Price: any;

  constructor(private http: HttpClient, private dataService: ProductServiceService) {

  }

  ngOnInit() {
    this.dataService.get_products().subscribe(data => {
      this.data = data;
      console.log(data);
    });
  }

  sort(event: any) {
    const dataval: any = 'Price';
   // this.isDesc = !this.isDesc;
    const direction = this.isDesc ? -1 : 1;
    this.data.sort(function(a, b) {
      if (event.target.value == 'SORT BY PRICE: LOW TO HIGH') {
      if (a[dataval] < b[dataval]) {
        return -1 * direction;
      } else {
        return 0;
      }
      } else {
        if (a[dataval] > b[dataval]) {
          return -1 * direction;
        } else {
          return 0;
        }
      }
    });
  }

  callfn(mydata: any) {
      // sessionStorage.setItem('view_prod', );
      this.dataService.setp(mydata)
  }

  cart() {
    alert('Product Added Successfully');
  }

}
