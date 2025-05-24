import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VestidoService } from '../../services/vestido.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <button (click)="voltar()">Voltar</button>

    <h2>Cadastrar Vestido</h2>

    <form (ngSubmit)="cadastrar()">
      <div style="display: flex; align-items: center; gap: 10px;">
        <span>Nome:</span>
        <input [(ngModel)]="vestido.nome" name="nome" required>

        <span>Tamanho:</span>
        <input [(ngModel)]="vestido.tamanho" name="tamanho" required>

        <span>Cor:</span>
        <input [(ngModel)]="vestido.cor" name="cor" required>

        <span>Qtd:</span>
        <input type="number" [(ngModel)]="vestido.qtd" name="qtd" required>

        <button type="submit">Cadastrar</button>
      </div>
    </form>
  `
})
export class CadastroComponent {
  vestido = { nome: '', tamanho: '', cor: '', qtd: 0 };

  constructor(
    private vestidoService: VestidoService,
    private location: Location
  ) {}

  voltar() {
    this.location.back();
  }

  cadastrar() {
    this.vestidoService.adicionar(this.vestido);
    alert('Vestido cadastrado!');
    this.vestido = { nome: '', tamanho: '', cor: '', qtd: 0 };
  }
}
