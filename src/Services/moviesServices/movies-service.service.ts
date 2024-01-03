import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../app/Modele/User';
import { FilmDetail } from '../../app/Modele/FilmDetail';
import { filmData } from '../../app/Modele/filmData';

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {
  API_TOKEN:String ="ca5f9791488cf94fdd19bf25143d4bfd"
  favories:FilmDetail[];
  filmData:{id:number,title:string,userid:number};

 
  user:User;
  constructor(private http : HttpClient) { }
  url = "https://api.themoviedb.org/3/movie/popular?api_key="+this.API_TOKEN

  
  getAllfilms():Observable<any>{
    return this.http.get(this.url)  
  }
  getImageUrl(name:string|undefined){
    const baseUrl = 'https://image.tmdb.org/t/p/w500'+name;
    return baseUrl;
  }
  getfavoriesByid():Observable<any>{
    const url="http://localhost:8090/favories/"+this.user.id;
    return this.http.get<any>(url)
  }

 getByidFilm(id:number):Observable<any>{
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.API_TOKEN}`;
    return this.http.get<any>(url);
  
  }
  addFilmtoFav(film:filmData):Observable<any>{
    const url="http://localhost:8090/favories";
    return this.http.post<any>(url,film);

  }
  removeFilmfav(idfilm:number){
    const url="http://localhost:8090/users/+favories/"+idfilm;
    return this.http.delete(url);

  }
  setUser(user:User){
    this.user=user
    }
}
