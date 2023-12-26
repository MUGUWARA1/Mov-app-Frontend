import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router,RouterLink, RouterLinkActive } from '@angular/router';
import { Film } from '../Metier/Film';
import { MoviesServiceService } from '../../Services/moviesServices/movies-service.service';

@Component({
  selector: 'app-card-film',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './card-film.component.html',
  styleUrl: './card-film.component.css'
})
export class CardFilmComponent {
  @Input() film:Film | undefined;
JSON: any;

  getImageUrl(name:string|undefined){
    const baseUrl = 'https://image.tmdb.org/t/p/w500'+name;
    return baseUrl;
  }
   
  constructor(private router :Router,private movserv:MoviesServiceService){}
  


}
