import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFilmComponent } from '../card-film/card-film.component';
import { FilmPageComponent } from '../film-page/film-page.component';


@Component({
  selector: 'app-list-film',
  standalone: true,
  imports: [CommonModule,CardFilmComponent,FilmPageComponent],
  templateUrl: './list-film.component.html',
  styleUrl: './list-film.component.css'
})
export class ListFilmComponent implements OnInit {
  constructor(){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  films=[{
    id:1,
    annee:2023,
    Nom:"Mission Impossible",
    imageURL:"https://dx35vtwkllhj9.cloudfront.net/paramountpictures/mission-impossible-7/images/regions/us/onesheet.jpg",
    Desription :"jjhvdjhvfjvdfjvjdvfjvdjvfjvjfvsjdvfjdsvfjvsjdvdfj"

  },{
    id:2,
    annee:2020,
    Nom:"the equalizer",
    imageURL:"./assets/theEqualizer.jpg"
    ,
    Desription :"jjhvdjhvfjvdfjvjdvfjvdjvfjvjfvsjdvfjdsvfjvsjdvdfj"
  },
  {
    id:2,
    annee:2020,
    Nom:"Seven",
    imageURL:"./assets/Seven.jpg",
    Desription :"jjhvdjhvfjvdfjvjdvfjvdjvfjvjfvsjdvfjdsvfjvsjdvdfj"
  },
  {
      id:3,
      annee:1999,
      Nom:"Forest Gump",
      imageURL:"./assets/Seven.jpg"
      ,
    Desription :"jjhvdjhvfjvdfjvjdvfjvdjvfjvjfvsjdvfjdsvfjvsjdvdfj"
    }
    ,{
      id:4,
      annee:2020,
      Nom:"Seven",
      imageURL:"./assets/Seven.jpg"
      ,
    Desription :"jjhvdjhvfjvdfjvjdvfjvdjvfjvjfvsjdvfjdsvfjvsjdvdfj"
    }
    ,{
      id:5,
      annee:2020,
      Nom:"Seven",
      imageURL:"./assets/Seven.jpg"}
  ]



}
