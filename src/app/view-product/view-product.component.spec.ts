import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductComponent } from './view-product.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MydataService } from './mydata.service';
import { BrowserDynamicTestingModule,
  platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
  import { RouterTestingModule } from '@angular/router/testing';
  import { FormBuilder, Validators } from '@angular/forms';


describe('ViewProductComponent', () => {
  let component: ViewProductComponent;
  let fixture: ComponentFixture<ViewProductComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  const myDataServiceSpy = jasmine.createSpyObj('MydataService', ['add_comm']);
  beforeEach(async(() => {
    // fixture.detectChanges();

    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(BrowserDynamicTestingModule,
    platformBrowserDynamicTesting());
      
    TestBed.configureTestingModule({
      declarations: [ ViewProductComponent ],
      imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
      providers: [
        { provide: MydataService, useValue: myDataServiceSpy}, { provide: FormBuilder, useValue: formBuilder } 
      ]
        })
    .compileComponents();
  }));

  beforeEach(() => {
    
    fixture = TestBed.createComponent(ViewProductComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
    sessionStorage.setItem('title', 'Ankit');

  
    var store = {};

    spyOn(sessionStorage, 'getItem').and.callFake((key:string):string => {
     return store[key] || null;
    });
    spyOn(sessionStorage, 'setItem').and.callFake((key:string, value:string):string =>  {
      return store[key] = <string>value;
    });
    spyOn(sessionStorage, 'clear').and.callFake(() =>  {
        store = {};
    });


  });


    it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
 
  });

});
