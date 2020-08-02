import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../edit-product-details/myservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-edit-product-details',
  templateUrl: './edit-product-details.component.html',
  styleUrls: ['./edit-product-details.component.css']
})
export class EditProductDetailsComponent implements OnInit {

  constructor(private service: MyserviceService, private formBuilder: FormBuilder) { }
   tempvar: any = this.service.getp();
   
  public lineChartData: ChartDataSets[] = [
    { data: [68, 59, 74, 81, 66, 67, 72, 73], label: this.service.gettitle()},
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];
  public lineChartOptions: { responsive: boolean } = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];


  updateForm: FormGroup;
  submitted = false;
  
  mydata: any;
  mydata2: any;
  chartview: boolean;
  comments: boolean;
  data1: any;
  url : any;
  product_description: any;
  product_quantity: any;
  price: any;
  id: any;
  title: any;
  // constructor(private service: MyserviceService, private formBuilder: FormBuilder) { }

  ngOnInit() {

   this.mydata2 = this.service.getp();
    this.title= this.service.gettitle();
    this.id= this.service.getid();
    this.price= this.service.getPrice();
    this.product_quantity = this.service.getproduct_quantity();
    this.product_description= this.service.getproduct_description();
    this.url= this.service.geturl();


  //  this.mydata = this.mydata2;
   this.updateForm = this.formBuilder.group({
      id: [this.service.getid(), Validators.required],
      title: [this.service.gettitle(), Validators.required],
      Price: [this.service.getPrice() , Validators.required],
      url: [this.service.geturl(), Validators.required],
      product_quantity: [this.service.getproduct_quantity(), Validators.required],
      product_description: [this.service.getproduct_description(), Validators.required]
    });


   this.service.get_comments(this.service.getid()).subscribe(data => {
     this.data1 = Object.values(data);
   }, error => {
     console.log('Error');
   });

  }

  get f() { return this.updateForm.controls; }

  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.updateForm.invalid) {
        return;
    }

      this.service.update_product(this.updateForm.value).subscribe(data => {
        console.log('Data After Updation ', data)
        alert('Successfully Updated');
      }, error => {
        console.log('Error Occured', error);
      });
  }

  chart() {
    this.comments = false;
    this.chartview = true;
  }

  comment() {
    this.comments = true;
    this.chartview = false;
  }
}
