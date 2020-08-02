import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

 constructor() {}
 days: any;
 hours: any;
 minutes: any;
 seconds: any;

  ngOnInit() {
    var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

    var x = setInterval( () => {
    
      
      var now = new Date().getTime();
      var distance = countDownDate - now;
        
      // Time calculations for days, hours, minutes and seconds
       this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
       this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
       this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
    
    
  }
}
