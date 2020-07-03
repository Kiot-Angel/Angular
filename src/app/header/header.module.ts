import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MaterialModuleModule} from '../material-module/material-module.module';
import {MatMenuModule, MatToolbarModule} from '@angular/material';
import { ReactiveFormsModule} from '@angular/forms';
import { MatTableModule,  MatTabsModule} from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModuleModule,
    MatMenuModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatTableModule, MatTabsModule, RouterModule
  ]
})
export class HeaderModule { }
