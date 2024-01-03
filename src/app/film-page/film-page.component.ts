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
import { Film } from '../Modele/Film';
import { filmData } from '../Modele/filmData';



@Component({
  selector: 'app-film-page',
  standalone: true,
  imports: [CommonModule,StarsComponent,FormsModule],
  templateUrl: './film-page.component.html',
  styleUrl: './film-page.component.css',
})
export class FilmPageComponent implements OnInit{
  id:any=this.route.snapshot.params["id"];
  filmdetail:FilmDetail;
  comments :Commentaire[];
  Commtext:string 
  myForm: FormGroup;
  user: User;
  filmData:filmData;
  favories:FilmDetail[]
  favorited:boolean;
  commentuser:User


  constructor(private route :ActivatedRoute,
              private moviesservice:MoviesServiceService,
              private commentservice :CommentServiceService,
              private authserv :AuthService
            
              ) {}
  ngOnInit(): void {
   
    this.getFilmById();
    this.loadcomments();
    this.loadUser();
    this.checkFav()
    this.favorited=false
  }
 
  

  loadUser(){
    this.user=this.authserv.getUser()
  }

  loadfilm(){
    this.filmData={
      id:this.id,
      title:this.filmdetail.original_title,
      user:this.user
    
    }
  }

  loadcomments(){
    this.commentservice.getCommentsByidFilm(this.id).subscribe(data=>{
        console.log(data)
        this.comments=data;
        })
  
  }
  usercom(c :Commentaire){
    if(c.idUser!=null){
      this.authserv.getUserid(c.idUser).subscribe(data=>{
          return data.username
      })

    }
  }

  submitComment(): void{
    const commentaire ={
      id: null,
      text : this.Commtext,
      idFilm:this.id,
      idUser:this.user.id
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
    console.log(this.favorited)
    this.favorited = !this.favorited;
    this.loadfilm()
  
    if (this.favorited) {
      this.moviesservice.addFilmtoFav(this.filmData).subscribe(
        response => {
          console.log("Film added: ", this.filmData);
        },
        error => {
          console.error("Error adding film to favorites: ", error);
        }
      );
    } else {
      this.moviesservice.removeFilmfav(this.filmData.id).subscribe(
        response => {
          console.log("Film removed: ", this.filmData);
        },
        error => {
          console.error("Error adding film to favorites: ", error);
        })
      
    }
  }
   checkFav(){
    this.moviesservice.getfavoriesByid().subscribe(
      data=>{
        this.favories=data;
        console.log(data)
        this.favories.forEach((f)=>{
          
          if(f.id===Number(this.id)){
            this.favorited=true
          }
        })
        
      }
    )
   
  }

  
}




