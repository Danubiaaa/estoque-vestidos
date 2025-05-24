import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private usuario: { nome: string; email: string } | null = null;

  login(nome: string, email: string) {
    this.usuario = { nome, email };
  }

  getUsuario() {
    return this.usuario;
  }
}
