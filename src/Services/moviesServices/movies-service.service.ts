import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {
  API_TOKEN:String ="ca5f9791488cf94fdd19bf25143d4bfd"
 
  
  constructor(private http : HttpClient) { }
  url = "https://api.themoviedb.org/3/movie/popular?api_key="+this.API_TOKEN

  
  getAllfilms():Observable<any>{
     
    return this.http.get(this.url)  
  }
  getImageUrl(name:string|undefined){
    const baseUrl = 'https://image.tmdb.org/t/p/w500'+name;
    return baseUrl;
  }

 getByidFilm(id:number):Observable<any>{
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.API_TOKEN}`;
    return this.http.get<any>(url);
  
  }
  
}
