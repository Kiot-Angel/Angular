import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyproductComponent } from './myproduct.component';
import {FormsModule} from '@angular/forms';
import { SortByPipe } from 'src/app/sort-by.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('MyproductComponent', () => {
  let component: MyproductComponent;
  let fixture: ComponentFixture<MyproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyproductComponent, SortByPipe ],
      imports: [ FormsModule, RouterTestingModule, HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
