import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Perfil do Usuário</h2>
    <p><strong>Nome:</strong> {{ nome }}</p>
    <p><strong>E-mail:</strong> {{ email }}</p>

    <button (click)="voltar()">Voltar</button>
  `
})
export class PerfilComponent implements OnInit {
  nome = '';
  email = '';

  constructor(private authService: AuthService, private location: Location) {}

  ngOnInit() {
  const usuario = this.authService.getUsuario();
  if (usuario) {
    this.nome = usuario.nome;
    this.email = usuario.email;
  } else {
    this.nome = 'Usuário não autenticado';
    this.email = '';
  }
}


  voltar() {
    this.location.back();
  }
}
