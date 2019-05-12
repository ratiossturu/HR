import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable,throwError, of  } from 'rxjs';
import { catchError } from 'rxjs/operators'; 
import { AuthServices } from './auth/auth.service';


const httpOptions = {
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})


export class CoreService {
  
  private baseUrl:string;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string,private auth : AuthServices) 
  {
   this.baseUrl=baseUrl;
   httpOptions.headers= new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': this.auth.getToken()
  });
  console.log(httpOptions.headers);
  }
  
   HttpGet(url:string):Observable<any>{
    return this.http.get<any>(this.baseUrl+url).pipe(
      catchError(this.handleError<any>(`getHero`))
    );
   }
   
   HttpPost(url:string,data:any):Observable<any>{
    return this.http.post<any>(this.baseUrl+url,data,httpOptions).pipe(
      catchError(this.handleError<any>(`getHero`))
    );
   }

   private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
}
