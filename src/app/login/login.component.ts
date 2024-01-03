import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import { AuthService } from '../../Services/moviesServices/auth.service';
import { User } from '../Modele/User';
import { MoviesServiceService } from '../../Services/moviesServices/movies-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user:User
  formData: { username: string, password: string } = { username: '', password: '' };

  constructor(private router :Router, private authser :AuthService,private movieserv: MoviesServiceService) {
  }

  login(){
      this.loadUser()
  }

  loadUser(){
    this.authser.login(this.formData.username,this.formData.password).subscribe(data=>{
      console.log(data.username +" Is `connected");
      console.log(data)
      this.authser.setUser(data)
      this.movieserv.setUser(data)

      this.router.navigateByUrl("/main/home");
    },
      error=>console.error("user Not Found ")
      )

  }



  
  
}
