import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BannerComponent} from './banner/banner.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {MailUsComponent} from './mail-us/mail-us.component';
import {FaqComponent} from './faq/faq.component';
import {EditProductDetailsComponent} from './edit-product-details/edit-product-details.component';
import {AuthGuardGuard} from './auth-guard.guard';
import {ViewProductComponent} from './view-product/view-product.component';
import {MyAccountComponent} from './my-account/my-account.component';

const routes: Routes = [
  {
    path: '', component: BannerComponent
  },
  {
    path: 'about', component: AboutUsComponent
  },
  {
    path: 'editProduct', component: EditProductComponent, canActivate: [AuthGuardGuard]
  },
  {
    path: 'mailUS', component: MailUsComponent
  },
  {
    path: 'faq', component: FaqComponent
  },
  {
    path: 'editProduct/editProductDetails', component: EditProductDetailsComponent
  },
  {
    path: 'viewProduct', component: ViewProductComponent
  },
  {
    path: 'myaccount', component: MyAccountComponent
  },
  {
    path: 'products',  loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
