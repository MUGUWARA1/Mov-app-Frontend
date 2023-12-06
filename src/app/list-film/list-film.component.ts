import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFilmComponent } from '../card-film/card-film.component';
import { FilmPageComponent } from '../film-page/film-page.component';
import { MoviesServiceService } from '../movies-service.service';


@Component({
  selector: 'app-list-film',
  standalone: true,
  imports: [CommonModule,CardFilmComponent,FilmPageComponent],
  templateUrl: './list-film.component.html',
  styleUrl: './list-film.component.css'
})
export class ListFilmComponent implements OnInit {
  films:any[]=[];
  constructor(private movserv:MoviesServiceService) {
    
  }
  ngOnInit(): void {
    this.films=this.movserv.getAllfilms();
  }
}