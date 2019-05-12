import { Injectable, Inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'

@Injectable({
    providedIn: 'root'
  })


export class AuthServices{

     constructor(private cookie:CookieService){
     }

insertToken(token:any){
 this.cookie.set("token",token);
}
getToken(){
 return this.cookie.get("token");
}

}

