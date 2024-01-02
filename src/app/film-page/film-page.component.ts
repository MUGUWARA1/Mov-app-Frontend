import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MoviesServiceService } from '../../Services/moviesServices/movies-service.service';
import { FilmDetail } from '../Modele/FilmDetail';
import { Commentaire } from '../Modele/Commentaire';
import { CommentServiceService } from '../../Services/moviesServices/comment-service.service';
import { StarsComponent } from '../stars/stars.component';
import {FormGroup, FormsModule} from "@angular/forms";
import { User } from '../Modele/User';
import { AuthService } from '../../Services/moviesServices/auth.service';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-film-page',
  standalone: true,
  imports: [CommonModule,StarsComponent,FormsModule,LoginComponent],
  templateUrl: './film-page.component.html',
  styleUrl: './film-page.component.css',
})
export class FilmPageComponent implements OnInit{
  id:any=this.route.snapshot.params["id"];
  filmdetail:FilmDetail;
  comments :Commentaire[];
  Commtext:string 
  favories:number[];
  myForm: FormGroup;
  user: User;
  constructor(private route :ActivatedRoute,
              private moviesservice:MoviesServiceService,
              private commentservice :CommentServiceService,
              private LoginComp :LoginComponent
              ) {}
  ngOnInit(): void {
   
    this.getFilmById();
    this.loadcomments();
    this.loadFavories;
  }



  loadcomments(){
    this.commentservice.getCommentsByidFilm(this.id).subscribe(data=>{
        console.log(data)
        this.comments=data;
    });
  }


  submitComment(): void{
    const commentaire ={
      id: null,
      text : this.Commtext,
      idFilm:this.id,
      idUser:null
    }
    this.commentservice.postCommentaire(commentaire).subscribe(
      (response) => {
        // Handle success if needed
        console.log('Comment added successfully', response);
        this.loadcomments();  
        this.Commtext='';
        // Refresh comment data after adding a new comment
        this.commentservice.getCommentsByidFilm(this.id);
      },
      (error) => {
        // Handle error if needed
        console.error('Error adding comment', error);
      }
    )

  }


  loadUser(){

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




