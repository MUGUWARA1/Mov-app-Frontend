import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent  {
  constructor(private router:Router ,) {
    
  }

  
  homepage(){
    this.router.navigateByUrl('main/home')
   
  }
  Favpage(){
    this.router.navigateByUrl('main/favories')
   
  }
      
}
