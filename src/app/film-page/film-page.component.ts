import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-film-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './film-page.component.html',
  styleUrl: './film-page.component.css'
})
export class FilmPageComponent {
  @Input() Nom :string|undefined;
  @Input() Annee :number|undefined;
  @Input() Description :string|undefined;

}
