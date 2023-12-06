import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   private apiKey: string | undefined;
   private baseUrl!: string;
   

  constructor( private http: HttpClient) {
    this.apiKey="ca5f9791488cf94fdd19bf25143d4bfd";
    this.baseUrl='https://api.themoviedb.org/3/';

  }
  getMovie():Observable<any>{
    return this.http.get(`${this.baseUrl}/movie/popular?api_key=${this.apiKey}`);  }
}
