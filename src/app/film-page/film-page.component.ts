import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { MoviesServiceService } from '../../Services/moviesServices/movies-service.service';
import { FilmDetail } from '../Modele/FilmDetail';
import { Commentaire } from '../Modele/Commentaire';
import { CommentServiceService } from '../../Services/moviesServices/comment-service.service';

@Component({
  selector: 'app-film-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './film-page.component.html',
  styleUrl: './film-page.component.css'
})
export class FilmPageComponent implements OnInit{
  id:any=this.route.snapshot.params["id"];
  filmdetail:FilmDetail;
  comments :Commentaire[];
  favories:number[];
  constructor(private route :ActivatedRoute,private moviesservice:MoviesServiceService,private commentservice :CommentServiceService) {}
  ngOnInit(): void {
    this.getFilmById();
    this.loadcomments();
    this.loadFavories;
  }


  loadcomments(){
    this.comments =this.commentservice.getComments();
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
  toggleFavorite() {
    this.filmdetail.favorited = !this.filmdetail.favorited;
    if(this.filmdetail.favorited){
      this.favories.push(this.filmdetail.id)
    }
  }
  loadFavories(){
    if(this.filmdetail.id in this.favories){
      this.filmdetail.favorited===true;
    }
  }
  

  
}

