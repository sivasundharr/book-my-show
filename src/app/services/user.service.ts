import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import LoginData from '../model/LoginData';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   private URL:String="http://localhost:8082/user";

  constructor(private httpClient:HttpClient) { }

  loginUser(loginData:LoginData){

    return this.httpClient.post(`${this.URL}/login`,loginData);

  }

}
