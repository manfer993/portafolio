import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  ruta:String = null;
  visible:Boolean =false;
  constructor(location: Location, router: Router){
    router.events.subscribe((val) => {
      this.ruta=location.path();      
    });
    this.visible;    
  }
  ngOnInit() {
    
  }
  showMenu(){
            
  }
}