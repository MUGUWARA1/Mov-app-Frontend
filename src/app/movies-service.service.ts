import { Injectable } from '@angular/core';
import { Film } from './Film';

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {
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
    imageURL:"./assets/theEqualizer.jpg",
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
      imageURL:"./assets/Seven.jpg" ,
      Desription :"jjhvdjhvfjvdfjvjdvfjvdjvfjvjfvsjdvfjdsvfjvsjdvdfj"
    }
    ,{
      id:4,
      annee:2020,
      Nom:"Seven",
      imageURL:"./assets/Seven.jpg",
      Desription :"jjhvdjhvfjvdfjvjdvfjvdjvfjvjfvsjdvfjdsvfjvsjdvdfj"
    }
    ,{
      id:5,
      annee:2020,
      Nom:"Seven",
      imageURL:"./assets/Seven.jpg",
      Desription :"jjhvdjhvfjvdfjvjdvfjvdjvfjvjfvsjdvfjdsvfjvsjdvdfj"

    }
  ]

  constructor() { }

  
  getAllfilms(){
    return this.films;
  }

  getByidFilm(id:number){
    for(let f of this.films){
          if(f.id===id){
            return f;
          }
    }
    return 0;
  }
}
