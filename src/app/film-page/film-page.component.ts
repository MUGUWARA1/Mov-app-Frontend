import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { MoviesServiceService } from '../../Services/moviesServices/movies-service.service';
import { FilmDetail } from '../Metier/FilmDetail';
import { Commentaire } from '../Metier/Commentaire';
import { CommentServiceService } from '../../Services/moviesServices/comment-service.service';

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
  comments :Commentaire[];
  constructor(private route :ActivatedRoute,private moviesservice:MoviesServiceService,private commentservice :CommentServiceService) {}
  ngOnInit(): void {
    this.getFilmById();
  }


 /* loadcomments(){
    this.comments =this.commentservice.getComments();
  }*/



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

