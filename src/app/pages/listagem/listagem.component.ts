import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vestido, VestidoService } from '../../services/vestido.service';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <button (click)="voltar()">Voltar</button>

    <h2>Lista de Vestidos</h2>

    <table border="1">
      <tr>
        <th>Id</th>
        <th>Tipo</th>
        <th>Tamanho</th>
        <th>Cor</th>
        <th>Qtd</th>
        <th>Ações</th>
      </tr>
      <tr *ngFor="let vestido of vestidos">
        <td>{{ vestido.id }}</td>
        <td><input [(ngModel)]="vestido.nome"></td>
        <td><input [(ngModel)]="vestido.tamanho"></td>
        <td><input [(ngModel)]="vestido.cor"></td>
        <td><input type="number" [(ngModel)]="vestido.qtd"></td>
        <td>
          <button (click)="salvarEdicao(vestido)">Salvar</button>
          <button (click)="excluir(vestido.id)">Excluir</button>
        </td>
      </tr>
    </table>
  `
})
export class ListagemComponent implements OnInit {
  vestidos: Vestido[] = [];

  constructor(
    private vestidoService: VestidoService,
    private location: Location
  ) {}

  voltar() {
    this.location.back();
  }

  ngOnInit() {
    this.carregar();
  }

  carregar() {
    this.vestidos = this.vestidoService.listar();
  }

  salvarEdicao(vestido: Vestido) {
    this.vestidoService.editar(vestido);
    alert('Vestido atualizado!');
  }

  excluir(id: number) {
    if (confirm('Tem certeza que deseja excluir?')) {
      this.vestidoService.excluir(id);
      this.carregar();
    }
  }
}
