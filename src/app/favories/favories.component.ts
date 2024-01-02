import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-favories',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './favories.component.html',
  styleUrl: './favories.component.css'
})
export class FavoriesComponent {

}
