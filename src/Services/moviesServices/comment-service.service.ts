import { Injectable } from '@angular/core';
import { Commentaire } from '../../app/Metier/Commentaire';

@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {
  comments:Commentaire[]=[];
  getComments(){
    return this.comments
  }
  constructor() { }
}
