import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable,throwError, of  } from 'rxjs';
import { catchError } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  
  private baseUrl:string;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) 
  {
   this.baseUrl=baseUrl;
   const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
   }
  
   HttpGet(url:string):Observable<any>{
    return this.http.get<any>(this.baseUrl+url).pipe(
      catchError(this.handleError<any>(`getHero`))
    );
   }
   
   HttpPost():any{

   }

   private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
}
