import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  logOut():void{
    localStorage.removeItem("userData");
  }

  getUserData():any {
    let data = localStorage.getItem("userData");
    if(data===null||data===undefined) return null;
    return JSON.parse(data);
  }

  isLoggedIn(){
    return this.getUserData()!=null;
  }

}
