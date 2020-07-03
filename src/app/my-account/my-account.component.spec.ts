import { async, ComponentFixture, TestBed, inject, getTestBed, fakeAsync } from '@angular/core/testing';

import { MyAccountComponent } from './my-account.component';
import {ReactiveFormsModule, FormsModule, FormBuilder, Validators} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { BannerComponent } from '../banner/banner.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { EditProductDetailsComponent } from '../edit-product-details/edit-product-details.component';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { FaqComponent } from '../faq/faq.component';
import { ChartsModule } from 'ng2-charts';
import { CountdownModule } from 'ngx-countdown';
import { MailUsComponent } from '../mail-us/mail-us.component';
import { ViewProductComponent } from '../view-product/view-product.component';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { BrowserDynamicTestingModule,
  platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

describe('MyAccountComponent', () => {
  let component: MyAccountComponent;
  let fixture: ComponentFixture<MyAccountComponent>
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {

    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(BrowserDynamicTestingModule,
    platformBrowserDynamicTesting());

    TestBed.configureTestingModule({
      declarations: [ MyAccountComponent, BannerComponent, AboutUsComponent, EditProductDetailsComponent, EditProductComponent, FaqComponent, MyAccountComponent, MailUsComponent, ViewProductComponent ],
      imports: [HttpClientModule, AppRoutingModule, ChartsModule, CountdownModule, MaterialModuleModule, FormsModule,ReactiveFormsModule],
      providers: [
        // reference the new instance of formBuilder from above
        // { provide: FormBuilder, useValue: formBuilder }
        FormBuilder
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAccountComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
