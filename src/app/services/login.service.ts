import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

   private URL:String="http://localhost:8082/user";

  constructor(private httpClient:HttpClient) { }

  loginUser(userData:any){

    return this.httpClient.post(`${this.URL}/login`,userData);

  }

}
