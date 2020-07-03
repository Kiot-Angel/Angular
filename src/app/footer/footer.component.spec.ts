import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing.module';
import { BannerComponent } from '../banner/banner.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { MailUsComponent } from '../mail-us/mail-us.component';
import { FaqComponent } from '../faq/faq.component';
import { EditProductDetailsComponent } from '../edit-product-details/edit-product-details.component';
import { ViewProductComponent } from '../view-product/view-product.component';
import { MyAccountComponent } from '../my-account/my-account.component';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { CountdownModule } from 'ngx-countdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent, BannerComponent, AboutUsComponent,EditProductComponent, MailUsComponent, FaqComponent, EditProductDetailsComponent, ViewProductComponent, MyAccountComponent ],
      imports: [ HttpClientModule, AppRoutingModule, MaterialModuleModule, CountdownModule, ReactiveFormsModule, ChartsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
