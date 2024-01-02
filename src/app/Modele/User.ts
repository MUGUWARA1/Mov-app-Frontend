import { Film } from "./Film"

export class User{
    id:number
    nom:string
    prenom:string
    username:string
    password:string
    filmsfav:Film[]
}