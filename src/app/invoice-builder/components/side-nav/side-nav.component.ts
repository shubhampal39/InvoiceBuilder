import { Component, NgZone, OnInit } from '@angular/core';
const Max_WIDTH_BREAKPOINT=270;
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
private mediaMatcher:MediaQueryList=matchMedia(
  `(max-width:${Max_WIDTH_BREAKPOINT}px)`);

  constructor(private zone:NgZone) {
   }

  ngOnInit(): void {
    this.zone.runOutsideAngular(()=>{
      this.isScreenSmall();
    });
  }
  
  isScreenSmall(){
    if(window.matchMedia('(max-width:767px)').matches)
     { 
    console.log("abcd");
       return true;}
       console.log("a");
    return false;
    
  }
}
