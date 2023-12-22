import { Injectable } from '@angular/core';
import { Film } from './Film';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {
  API_TOKEN:String ="ca5f9791488cf94fdd19bf25143d4bfd"
 

 /* films=[{
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
  ]*/
  
  constructor(private http : HttpClient) { }
  url = "https://api.themoviedb.org/3/movie/popular?api_key="+this.API_TOKEN

  
  getAllfilms():Observable<any>{
     
    return this.http.get(this.url)  
  }

 /* getByidFilm(id:number){
    for(let f of this.getAllfilms){
          if(f.id===id){
            return f;
          }
    }
    return 0;
  }*/
}
