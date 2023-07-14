import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    loginForm:FormGroup=new FormGroup({});
    constructor(private fb:FormBuilder,private loginService:LoginService){}

    onSubmit(data:any):void{

      this.loginService.loginUser(data).pipe(
        
      ).subscribe(data=>{

      })

    }

    ngOnInit():void{
      this.loginForm = this.fb.group({
        userName:['',Validators.required],
        password:['',Validators.required]
      });
    }
    
}
