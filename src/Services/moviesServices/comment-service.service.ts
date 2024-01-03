import { Injectable, OnInit } from '@angular/core';
import { Commentaire } from '../../app/Modele/Commentaire';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {
 
  constructor(private http : HttpClient) { 
    
  }

  getCommentsByidFilm(id:number):Observable<any>{
    const url="http://localhost:8090/comments/"+id
    return this.http.get(url);
  }
  

  postCommentaire( c :Commentaire):Observable<any>{
    const url="http://localhost:8090/comments"
    return this.http.post<any>(url,c);
  }

}
