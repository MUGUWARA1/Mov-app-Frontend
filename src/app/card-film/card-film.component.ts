import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router,RouterLink, RouterLinkActive } from '@angular/router';
import { Film } from '../Modele/Film';
import { MoviesServiceService } from '../../Services/moviesServices/movies-service.service';
import { StarsComponent } from '../stars/stars.component';
import { FilmDetail } from '../Modele/FilmDetail';

@Component({
  selector: 'app-card-film',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive,StarsComponent],
  templateUrl: './card-film.component.html',
  styleUrl: './card-film.component.css'
})
export class CardFilmComponent {
  @Input() film:FilmDetail | undefined;

  getImageUrl(name:string|undefined){
    const baseUrl = 'https://image.tmdb.org/t/p/w500'+name;
    return baseUrl;
  }
   
  constructor(private router :Router,private movserv:MoviesServiceService){}
  

  seeDetails(){
    this.router.navigateByUrl('main/filmPage/'+this.film.id)
  }


}
