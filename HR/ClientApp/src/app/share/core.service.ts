import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable,throwError, of  } from 'rxjs';
import { catchError } from 'rxjs/operators'; 


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })}

@Injectable({
  providedIn: 'root'
})


export class CoreService {
  
  private baseUrl:string;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) 
  {
   this.baseUrl=baseUrl;
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
