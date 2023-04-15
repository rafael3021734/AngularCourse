import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToggerService } from '../header/togger.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  title = 'MeuAppAngular';
  user = {
    email: '',
    password: ''
  };

  constructor(private toggle: ToggerService) { }
  ngOnInit() {
  }
  toggleSidebar() {
    this.toggle.toggleSidebar();
  }

  onSubmit(loginForm: NgForm) {
    if (loginForm.valid) {
      // Lógica de autenticação do usuário
    }
  }

/*  constructor() { }

  ngOnInit(): void {
  }*/

}
