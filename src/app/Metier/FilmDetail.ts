import { Genre } from "./Genre";

export class FilmDetail{
    id:number 
    release_date:number 
    original_title:string 
    poster_path:string 
    overview :string ;
    adult:boolean;
    genres:Genre[];
    original_language:string
    popularity:number


   

}
