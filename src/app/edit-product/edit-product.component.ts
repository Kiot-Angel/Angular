import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product/product-service.service';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { v4 as uuid } from 'uuid';
import { Router} from '@angular/router';
import { Location} from '@angular/common';
import {MyserviceService} from '../edit-product-details/myservice.service';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
  animations:[
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0}),
        animate(1500)
      ])
    ])
  ]
})
export class EditProductComponent implements OnInit {
  data: any;
  registerForm: FormGroup;
  id: any;
  SelectedIDs: any = [];
  newArr: any = [];
  // tslint:disable-next-line:max-line-length
    constructor(private myservice: ProductServiceService, private service: MyserviceService , private formBuilder: FormBuilder, private router: Router, private location: Location) { }

  ngOnInit() {
    this.myservice.get_products().subscribe(data => {
      this.data = data;
    });

    this.registerForm = this.formBuilder.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      Price: ['', Validators.required],
      url: ['', [Validators.required, Validators.email]],
      product_quantity: ['', Validators.required],
      product_description: ['', Validators.required]
    });
  }

  // Generate Unique ID
  public gen() {
    this.id = uuid();
    this.registerForm.controls.id.setValue(this.id);
  }

  selectID(id) {
    if (this.SelectedIDs.includes(id)) {
      const inde =  this.SelectedIDs.indexOf(id);
      if (inde > -1) {
        this.SelectedIDs.splice(inde, 1);
      }
    } else {
      this.SelectedIDs.push(id);
    }
  }

  // Delete Product
  deleteSelected() {

      if (confirm('Are you sure to Delete')) {
        if (this.SelectedIDs.length > 0) {
            const newArr2: any = this.SelectedIDs;
            // tslint:disable-next-line:forin
            for (const id in newArr2) {
              this.myservice.delete_products(newArr2[id]).subscribe(data3 => {
                window.location.reload();
              });
            }
        } else {
          alert('Please select atleast 1 Product to delete');
        }
      }
    }

  // Add Product
  onSubmit() {
      this.myservice.add_product(this.registerForm.value).subscribe( data => {
          setTimeout(() => {
          alert('Product Added Successfully');
          window.location.reload();
          }, 500);
      });


  }

  callme(data) {
      this.service.fullName = data;
      this.service.setp(this.service.fullName);
      // console.log(this.service.fullName, '............................')
      this.service.settitle(this.service.fullName.title);
      this.service.setid(this.service.fullName.id);
      this.service.setPrice(this.service.fullName.Price);
      this.service.setproduct_quantity(this.service.fullName.product_quantity);
      this.service.setproduct_description(this.service.fullName.product_description);
      this.service.seturl(this.service.fullName.url);



      // localStorage.setItem('product_data', JSON.stringify(this.service.fullName) ) ;
      this.router.navigate(['editProduct/editProductDetails']);
  }
}
