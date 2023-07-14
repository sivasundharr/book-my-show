import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, of, throwError } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

import LoginData from '../../model/LoginData';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    responseMessage:String = '';
    loginForm:FormGroup=new FormGroup({});

    constructor(
      private fb:FormBuilder,
      private router:Router,
      private loginService:LoginService){}

    onSubmit(data:LoginData):void{

      const data1 = new LoginData(data.userName,data.password); 

      this.loginService.loginUser(data1).pipe(
        // catchError((err:HttpErrorResponse)=>{
        //   console.log(err.error.detail);
        //   this.responseMessage = err.error.detail;
        //   return of(null);
        // })
      ).subscribe(
          data=>{
            localStorage.setItem("userData",JSON.stringify(data));
            this.responseMessage = '';
            this.router.navigate(['/home']);
          },
          (err:HttpErrorResponse)=>{
            this.responseMessage = err.error.detail;
          }
      );

    }

    ngOnInit():void{
      this.loginForm = this.fb.group({
        userName:['',Validators.required],
        password:['',Validators.required]
      });
    }
    
}
