import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  title = 'MeuAppAngular';
  user = {
    email: '',
    password: ''
  };

//  constructor() { }

  onSubmit(loginForm: NgForm) {
    if (loginForm.valid) {
      // Lógica de autenticação do usuário
    }
  }

}
