import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h2>Login</h2>
    <form (ngSubmit)="fazerLogin()">
      <label>
        Nome:
        <input [(ngModel)]="nome" name="nome" required />
      </label>
      <br />
      <label>
        E-mail:
        <input [(ngModel)]="email" name="email" type="email" required />
      </label>
      <br />
      <button type="submit">Entrar</button>
    </form>
  `
})
export class LoginComponent {
  nome = '';
  email = '';

  constructor(private authService: AuthService, private router: Router) {}

  fazerLogin() {
    if (this.nome && this.email) {
      this.authService.login(this.nome, this.email);
      this.router.navigate(['/home']); 
    } else {
      alert('Preencha nome e e-mail');
    }
  }
}
