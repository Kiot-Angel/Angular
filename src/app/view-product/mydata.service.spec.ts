import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MydataService } from './mydata.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { BannerComponent } from '../banner/banner.component';
import { MyAccountComponent } from '../my-account/my-account.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { CountdownModule } from 'ngx-countdown';
import { ChartsModule } from 'ng2-charts';
import { EditProductDetailsComponent } from '../edit-product-details/edit-product-details.component';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { FaqComponent } from '../faq/faq.component';
import { MailUsComponent } from '../mail-us/mail-us.component';
import { ViewProductComponent } from './view-product.component';

describe('MydataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    
    declarations: [ MyAccountComponent, BannerComponent, AboutUsComponent, EditProductDetailsComponent, EditProductComponent, FaqComponent, MyAccountComponent, MailUsComponent, ViewProductComponent ],
    imports: [HttpClientModule, AppRoutingModule, ChartsModule, CountdownModule, MaterialModuleModule, FormsModule,ReactiveFormsModule],
  }));

  it('should be created', () => {
    const service: MydataService = TestBed.get(MydataService);
    expect(service).toBeTruthy();
  });
});
