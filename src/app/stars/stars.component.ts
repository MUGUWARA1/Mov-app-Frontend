import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stars.component.html',
  styleUrl: './stars.component.css'
})
export class StarsComponent  {
  
  
  @Input() averageVote:number;

  maxStars: number = 5;
  
  stars(n:number){
     let a=Math.round(n/2)
    let sts = Array.from({ length: a}, (_, index) => index + 1);
    return sts.fill(0);

  }


}
