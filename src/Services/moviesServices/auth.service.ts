import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../app/Modele/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  username: any;
  password :string
  user : User

  constructor(private http: HttpClient) {}

   login(username: string, password: string):Observable<User>{
     
    const url="http://localhost:8090/users/"+username+"/"+password;
    return this.http.get<any>(url);
  }
  setpassword(data:string){
    this.password=data;
  }
  setUsername(data:string){
    this.username=data;
  }
  setUser(user:User){
    this.user=user

  }

  getUser(){
    return this.user
  }
  getUserid(iduser:number):Observable<User>{
    const url="http://localhost:8090/users/"+iduser
    return this.http.get<User>(url)

  }

} 