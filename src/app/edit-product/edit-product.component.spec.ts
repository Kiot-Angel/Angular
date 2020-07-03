import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductComponent } from './edit-product.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing.module';
import { BannerComponent } from '../banner/banner.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { MailUsComponent } from '../mail-us/mail-us.component';
import { FaqComponent } from '../faq/faq.component';
import { EditProductDetailsComponent } from '../edit-product-details/edit-product-details.component';
import { ViewProductComponent } from '../view-product/view-product.component';
import { MyAccountComponent } from '../my-account/my-account.component';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { CountdownModule } from 'ngx-countdown';
import { ChartsModule } from 'ng2-charts';

describe('EditProductComponent', () => {
  let component: EditProductComponent;
  let fixture: ComponentFixture<EditProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProductComponent, BannerComponent, AboutUsComponent, MailUsComponent, FaqComponent, EditProductDetailsComponent, ViewProductComponent, MyAccountComponent ],
      imports: [ ReactiveFormsModule, HttpClientModule, AppRoutingModule, MaterialModuleModule, CountdownModule, ChartsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
