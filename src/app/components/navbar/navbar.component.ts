import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  userData:any;

 
  ngOnInit(){
    this.userData = localStorage.getItem("userData") != null ?
     JSON.parse(this.userData) : {};
  }
}
