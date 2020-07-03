import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../header/myservice.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  isAdmin: any;
  tocheck: boolean;
  constructor(private myservice: MyserviceService, private router: Router) { }

  ngOnInit() {
  }

  checkdetails() {
    const check = localStorage.getItem('current_user');
    if (check == null) {
      this.tocheck = true;
    } else {
      this.tocheck = false;
      this.router.navigate(['/myaccount']);
    }
  }
}
