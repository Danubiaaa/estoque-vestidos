import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>Bem-vindo ao Sistema de Gestão de Vestidos!</h2>

    <nav>
      <a routerLink="/cadastro">Cadastrar Vestido</a> |
      <a routerLink="/listagem">Listar Vestidos</a> |
      <a routerLink="/perfil">Perfil</a>
    </nav>

    <br>

    <button (click)="voltarLogin()">Voltar ao Login</button>
  `
})
export class HomeComponent {

  constructor(private router: Router) {}

  voltarLogin() {
    this.router.navigate(['/login']);
  }
}
