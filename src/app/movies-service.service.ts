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
    Desription :"Mission: Impossible – Dead Reckoning Part One is a 2023 American spy action film directed by Christopher McQuarrie, from a screenplay he co-wrote with Erik Jendresen.[6] It is the sequel to Mission: Impossible – Fallout (2018) and the seventh installment in the Mission: Impossible film series. It stars Tom Cruise as Ethan Hunt, alongside an ensemble cast including Hayley Atwell, Ving Rhames, Simon Pegg, Rebecca Ferguson, Vanessa Kirby, Esai Morales, Pom Klementieff, Mariela Garriga, and Henry Czerny. In the film, Hunt and his IMF team face off against 'the Entity', a powerful rogue AI."

  },{
    id:2,
    annee:2020,
    Nom:"the equalizer",
    imageURL:"./assets/theEqualizer.jpg",
    Desription :"jjhvdjhvfjvdfjvjdvfjvdjvfjvjfvsjdvfjdsvfjvsjdvdfj"
  },
  {
    id:3,
    annee:2020,
    Nom:"Seven",
    imageURL:"./assets/Seven.jpg",
    Desription :"jjhvdjhvfjvdfjvjdvfjvdjvfjvjfvsjdvfjdsvfjvsjdvdfj"
  },
  {
      id:4,
      annee:1999,
      Nom:"Forest Gump",
      imageURL:"./assets/Seven.jpg" ,
      Desription :"jjhvdjhvfjvdfjvjdvfjvdjvfjvjfvsjdvfjdsvfjvsjdvdfj"
    }
    ,{
      id:5,
      annee:2020,
      Nom:"Seven",
      imageURL:"./assets/Seven.jpg",
      Desription :"jjhvdjhvfjvdfjvjdvfjvdjvfjvjfvsjdvfjdsvfjvsjdvdfj"
    }
    ,{
      id:6,
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
