import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { BannerComponent } from './banner/banner.component';
import { MaterialModuleModule } from './material-module/material-module.module';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { ProductModule} from './product/product.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { MailUsComponent } from './mail-us/mail-us.component';
import { FaqComponent } from './faq/faq.component';
import { EditProductDetailsComponent } from './edit-product-details/edit-product-details.component';
import { AuthGuardGuard} from './auth-guard.guard';
import { ChartsModule } from 'ng2-charts';
import { ViewProductComponent } from './view-product/view-product.component';
import {CountdownModule} from 'ngx-countdown';
import { MyAccountComponent } from './my-account/my-account.component';
import { AngularFireModule } from "angularfire2";
import { environment } from 'src/environments/environment.prod';
import { AngularFireDatabaseModule } from "angularfire2/database";
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    FooterComponent,
    AboutUsComponent,
    EditProductComponent,
    MailUsComponent,
    FaqComponent,
    EditProductDetailsComponent,
    ViewProductComponent,
    MyAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    MaterialModuleModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    ProductModule,
    ChartsModule,
    CountdownModule,
   AngularFireModule.initializeApp(environment.firebaseConfig),
   AngularFireDatabaseModule,
   NgxPaginationModule
  ],
  exports: [MaterialModuleModule],
  providers: [AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
