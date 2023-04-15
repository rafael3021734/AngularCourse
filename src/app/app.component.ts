import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToggerService } from '../app/components/template/header/togger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MeuAppAngular';
  user = {
    email: '',
    password: ''
  };
  constructor(private toggle: ToggerService) { }
  get isSidebarOpen() {
    return this.toggle.isSidebarOpen;
  }

  toggleSidebar() {
    this.toggle.toggleSidebar();
  }

  toggleSomeFeature() {
    this.toggle.toggleSomeFeature();
  }

  onSubmit(loginForm: NgForm) {
    if (loginForm.valid) {
      // Lógica de autenticação do usuário
    }
  }
}

//  templateUrl: './app.component.html',
