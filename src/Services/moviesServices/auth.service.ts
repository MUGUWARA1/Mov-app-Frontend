import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
import { User } from '../../app/Modele/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;
  roles: any;
  username: any;
  accessToken!: string;

  constructor(private http: HttpClient) {}

   login(username: string, password: string):Observable<User>{
    
    const url="http://localhost:8090/users/"+username+"/"+password;
    return this.http.get<any>(url);
  }

} 