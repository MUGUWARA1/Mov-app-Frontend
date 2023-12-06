import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFilmComponent } from '../card-film/card-film.component';
import { FilmPageComponent } from '../film-page/film-page.component';
import { ApiService } from '../Services/api/api.service';


@Component({
  selector: 'app-list-film',
  standalone: true,
  imports: [CommonModule,CardFilmComponent,FilmPageComponent],
  templateUrl: './list-film.component.html',
  styleUrl: './list-film.component.css'
})
export class ListFilmComponent implements OnInit {
   films: any;
  constructor(private moviesServces : ApiService){}
  ngOnInit() {
    this.moviesServces.getMovie().subscribe((data : any)=>this.films=data.results);
  }
  
}
