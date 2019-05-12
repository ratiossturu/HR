import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CoreService } from '../share/core.service';
import { LoginModel } from '../share/models/login_model';
import { AuthServices } from '../share/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: CoreService,private auth : AuthServices) { }

  ngOnInit() {

    var t=new LoginModel();
    t.Password="def@123";
    t.UserName="johndoe";
    
   this.http.HttpPost('api/Auth/login',t).subscribe(res=>{
   this.auth.insertToken(res);

   })
  }

  onSubmit(){

    
    }

}
