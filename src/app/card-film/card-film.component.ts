import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-film',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-film.component.html',
  styleUrl: './card-film.component.css'
})
export class CardFilmComponent {
  @Input() imageUrl: string | undefined;
  @Input() title: string | undefined;
  @Input() annee!: Number;

}
