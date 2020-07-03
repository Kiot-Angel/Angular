import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModuleModule} from '../../material-module/material-module.module';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../../app-routing.module';
import { BannerComponent } from 'src/app/banner/banner.component';
import { AboutUsComponent } from 'src/app/about-us/about-us.component';
import { EditProductComponent } from 'src/app/edit-product/edit-product.component';
import { MailUsComponent } from 'src/app/mail-us/mail-us.component';
import { FaqComponent } from 'src/app/faq/faq.component';
import { EditProductDetailsComponent } from 'src/app/edit-product-details/edit-product-details.component';
import { ViewProductComponent } from 'src/app/view-product/view-product.component';
import { MyAccountComponent } from 'src/app/my-account/my-account.component';
import { CountdownModule } from 'ngx-countdown';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent, BannerComponent, AboutUsComponent, EditProductComponent, MailUsComponent, EditProductDetailsComponent, FaqComponent, ViewProductComponent, MyAccountComponent],
      imports : [FormsModule, ReactiveFormsModule, MaterialModuleModule, HttpClientModule, AppRoutingModule, CountdownModule, ChartsModule, BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
