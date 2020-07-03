import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header/header.component';
import {BannerComponent} from './banner/banner.component';
import {FooterComponent} from './footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { MailUsComponent } from './mail-us/mail-us.component';
import { FaqComponent } from './faq/faq.component';
import { EditProductDetailsComponent } from './edit-product-details/edit-product-details.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule
      ], schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        BannerComponent,
        AboutUsComponent,
        EditProductComponent,
        MailUsComponent,
        FaqComponent,
        EditProductDetailsComponent,
        ViewProductComponent,
        MyAccountComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Capstone-Project'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Capstone-Project');
  });
});
