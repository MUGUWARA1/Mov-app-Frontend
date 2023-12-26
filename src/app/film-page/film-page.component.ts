import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Film } from '../Metier/Film';
import { MoviesServiceService } from '../movies-service.service';
import { FilmDetail } from '../Metier/FilmDetail';

@Component({
  selector: 'app-film-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './film-page.component.html',
  styleUrl: './film-page.component.css'
})
export class FilmPageComponent implements OnInit{
  id:any;
  filmdetail:FilmDetail;
  constructor(private route :ActivatedRoute,private moviesservice:MoviesServiceService) {}
  ngOnInit(): void {
    this.getFilmById();
    
  
  }
  getImageUrl(name:string|undefined){
    const baseUrl = 'https://image.tmdb.org/t/p/w500'+name;
    return baseUrl;
  }
  getFilmById(){
    this.moviesservice.getByidFilm(this.route.snapshot.params["id"]).subscribe(data=>{
      this.filmdetail=data
    })


  }
  
}

