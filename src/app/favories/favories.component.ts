import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FilmDetail } from '../Modele/FilmDetail';
import { MoviesServiceService } from '../../Services/moviesServices/movies-service.service';
import { CardFilmComponent } from "../card-film/card-film.component";
import { filmData } from '../Modele/filmData';

@Component({
    selector: 'app-favories',
    standalone: true,
    templateUrl: './favories.component.html',
    styleUrl: './favories.component.css',
    imports: [CommonModule, RouterLink, CardFilmComponent]
})
export class FavoriesComponent implements OnInit {
  ngOnInit(): void {
    this.movser.getfavoriesByid().subscribe(data=>{
      console.log(data)
      this.fav=data;
      this.fav.forEach(f=>{
        this.movser.getByidFilm(f.id).subscribe(data=>{
          console.log(data)
          this.favories.push(data)
          
        })
        
      })

    })
    console.log(this.fav)
    
    }
  fav:{id:number,title:string}[];
  favories:FilmDetail[]=[];
  constructor(private movser:MoviesServiceService){}

  loadFavories(){
    this.favories=this.movser.favories;
  }
  


}
