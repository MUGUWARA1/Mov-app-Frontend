import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import { AuthService } from '../../Services/moviesServices/auth.service';
import e from 'express';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formData: { username: string, password: string } = { username: '', password: '' };

  constructor(private router :Router, private authser :AuthService) {
  }

  login(){
      this.loadUser()
  }

  loadUser(){
    this.authser.login(this.formData.username,this.formData.password).subscribe(data=>{
      console.log(data.username +" Is `connected");
      this.router.navigateByUrl("/main/home");
    },
      error=>console.error("user Not Found ")
      )

  }

  
  
}
