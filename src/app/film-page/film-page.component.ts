import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Film } from '../Film';
import { MoviesServiceService } from '../movies-service.service';

@Component({
  selector: 'app-film-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './film-page.component.html',
  styleUrl: './film-page.component.css'
})
export class FilmPageComponent implements OnInit{
  film:any;
  constructor(private route :ActivatedRoute,private moviesservice:MoviesServiceService) {}
  ngOnInit(): void {
    this.route.params.subscribe((param:any)=>{
      const id =param['id'];
      this.film=this.moviesservice.getByidFilm(id);
  })
  
}
}
