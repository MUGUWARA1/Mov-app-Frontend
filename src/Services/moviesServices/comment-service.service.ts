import { Injectable } from '@angular/core';
import { Commentaire } from '../../app/Modele/Commentaire';

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
