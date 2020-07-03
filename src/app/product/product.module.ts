import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModuleModule} from '../material-module/material-module.module';
import { ProductRoutingModule } from './product-routing.module';
import { MyproductComponent } from './myproduct/myproduct.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {SortByPipe} from '../sort-by.pipe';

@NgModule({
  declarations: [MyproductComponent, SortByPipe],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule,
    MaterialModuleModule,
    FormsModule
  ],
  exports: [MaterialModuleModule],
})
export class ProductModule { }
