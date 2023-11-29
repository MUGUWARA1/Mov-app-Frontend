import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFilmComponent } from '../card-film/card-film.component';


@Component({
  selector: 'app-list-film',
  standalone: true,
  imports: [CommonModule,CardFilmComponent],
  templateUrl: './list-film.component.html',
  styleUrl: './list-film.component.css'
})
export class ListFilmComponent {
  films=[{
    id:1,
    annee:2023,
    Nom:"Mission Impossible",
    imageURL:"https://dx35vtwkllhj9.cloudfront.net/paramountpictures/mission-impossible-7/images/regions/us/onesheet.jpg"
  },{
    id:2,
    annee:2020,
    Nom:"the equalizer",
    imageURL:"./assets/theEqualizer.jpg"
  },{
    id:2,
    annee:2020,
    Nom:"Seven",
    imageURL:"./assets/Seven.jpg"},
    {
      id:3,
      annee:1999,
      Nom:"Forest Gump",
      imageURL:"./assets/Seven.jpg"}
    ,{
      id:4,
      annee:2020,
      Nom:"Seven",
      imageURL:"./assets/Seven.jpg"}
    ,{
      id:5,
      annee:2020,
      Nom:"Seven",
      imageURL:"./assets/Seven.jpg"}
  ]



}
