import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditProductDetailsComponent } from './edit-product-details.component';
import {FormsModule, ReactiveFormsModule,FormBuilder} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import {HttpClientModule} from '@angular/common/http';
import {CountdownModule} from 'ngx-countdown';
import {MaterialModuleModule} from '../material-module/material-module.module';
import {AppRoutingModule} from '../app-routing.module';
import {AboutUsComponent} from '../about-us/about-us.component';
import {BannerComponent} from '../banner/banner.component';
import {EditProductComponent} from '../edit-product/edit-product.component';
import {MailUsComponent} from '../mail-us/mail-us.component';
import {FaqComponent} from '../faq/faq.component';
import {ViewProductComponent} from '../view-product/view-product.component';
import {MyAccountComponent} from '../my-account/my-account.component';
import { BrowserDynamicTestingModule,
  platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

describe('EditProductDetailsComponent', () => {
  let component: EditProductDetailsComponent;
  let fixture: ComponentFixture<EditProductDetailsComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(BrowserDynamicTestingModule,
    platformBrowserDynamicTesting());
      
    TestBed.configureTestingModule({
      declarations: [ EditProductDetailsComponent, AboutUsComponent, BannerComponent, EditProductComponent, MailUsComponent, FaqComponent, ViewProductComponent, MyAccountComponent ],
      imports: [FormsModule, ChartsModule, ReactiveFormsModule, HttpClientModule, ChartsModule, CountdownModule, MaterialModuleModule, AppRoutingModule],
      providers: [
        // reference the new instance of formBuilder from above
        { provide: FormBuilder, useValue: formBuilder }
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductDetailsComponent);
    component = fixture.componentInstance;
   
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
