import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  userData:any =  this.authService.getUserData();

  constructor(private router:Router,private authService:AuthService){
  
  }

  logOut(){
    this.authService.logOut();
    this.userData = this.authService.getUserData();
    this.router.navigate(['/login']);
  }
 
  ngOnInit(){
    this.userData = this.authService.getUserData();
  }
  
}
