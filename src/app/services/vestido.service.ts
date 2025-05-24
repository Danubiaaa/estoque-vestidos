import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

export interface Vestido {
  id: number;
  nome: string;
  tamanho: string;
  cor: string;
  qtd: number;
  editando?: boolean;  // <- novo!
}


@Injectable({ providedIn: 'root' })
export class VestidoService {
  private vestidos: Vestido[] = [];
  private nextId = 1;

  constructor() {
    this.carregar();
  }

  private salvar() {
    localStorage.setItem('vestidos', JSON.stringify(this.vestidos));
    localStorage.setItem('nextId', this.nextId.toString());
  }

  private carregar() {
    const dados = localStorage.getItem('vestidos');
    const id = localStorage.getItem('nextId');
    if (dados) {
      this.vestidos = JSON.parse(dados);
    }
    if (id) {
      this.nextId = parseInt(id, 10);
    }
  }

  adicionar(vestido: Omit<Vestido, 'id'>) {
    const novoVestido: Vestido = { id: this.nextId++, ...vestido };
    this.vestidos.push(novoVestido);
    this.salvar();
  }

  listar(): Vestido[] {
    return this.vestidos;
  }

  editar(vestidoEditado: Vestido) {
  const index = this.vestidos.findIndex(v => v.id === vestidoEditado.id);
  if (index !== -1) {
    this.vestidos[index] = vestidoEditado;
    this.salvar();
  }
}

excluir(id: number) {
  this.vestidos = this.vestidos.filter(v => v.id !== id);
  this.salvar();
}
}

