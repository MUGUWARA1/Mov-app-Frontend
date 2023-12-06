import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router,RouterLink, RouterLinkActive } from '@angular/router';
import { Film } from '../Film';

@Component({
  selector: 'app-card-film',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './card-film.component.html',
  styleUrl: './card-film.component.css'
})
export class CardFilmComponent {
  @Input() film:Film | undefined;
   
  constructor(private router :Router){}


}
