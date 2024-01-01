import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MoviesServiceService } from '../../Services/moviesServices/movies-service.service';
import { FilmDetail } from '../Modele/FilmDetail';
import { Commentaire } from '../Modele/Commentaire';
import { CommentServiceService } from '../../Services/moviesServices/comment-service.service';
import { StarsComponent } from '../stars/stars.component';
import {FormGroup, FormsModule} from "@angular/forms";
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';



@Component({
  selector: 'app-film-page',
  standalone: true,
  imports: [CommonModule,StarsComponent,FormsModule,ToastModule],
  templateUrl: './film-page.component.html',
  styleUrl: './film-page.component.css',
  providers:[MessageService]
})
export class FilmPageComponent implements OnInit{
  id:any=this.route.snapshot.params["id"];
  filmdetail:FilmDetail;
  comments :Commentaire[];
  Commtext:string 
  favories:number[];
  Commdata: any;
  myForm: FormGroup;
  constructor(private route :ActivatedRoute,
              private moviesservice:MoviesServiceService,
              private commentservice :CommentServiceService,
              private messageService: MessageService) {}
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
  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
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

function submitComment() {
  throw new Error('Function not implemented.');
}

