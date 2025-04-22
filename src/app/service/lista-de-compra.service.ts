import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {
  private listaDeCompra: Item[] = [];
  // private listaDeCompra: Item[] = [
  //   {
  //     "id": 1,
  //     "nome": "Queijo prato",
  //     "data": "Segunda-feira (31/10/2022) às 08:30",
  //     "comprado": false
  //   },
  //   {
  //     "id": 2,
  //     "nome": "Leite integral",
  //     "data": "Segunda-feira (31/10/2022) às 08:30",
  //     "comprado": false
  //   },
  //   {
  //     "id": 3,
  //     "nome": "Mamão papaia",
  //     "data": "Segunda-feira (31/10/2022) às 08:30",
  //     "comprado": true
  //   },
  // ]

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('listaDeCompra') || '[]');
  }

  getListaDeCompra(){
    return this.listaDeCompra;
  }

  adicionarItem(nomeIitem: string): Item{
    const item: Item = {
      id: this.listaDeCompra.length + 1,
      nome: nomeIitem,
      data: new Date().toLocaleString(),
      comprado: false
    }

    return item;
  }

  adicionarItemLista(nomeItem: string): void {
    const item: Item = this.adicionarItem(nomeItem);

    this.listaDeCompra.push(item);
  }

  editarItem(itemEmEdicao: Item, nomeNovoItem: string): Item {
    const itemEditado: Item = {
      ...itemEmEdicao,
      nome: nomeNovoItem,
      data: new Date().toLocaleString(),
      comprado: false
    }

    return itemEditado
  }

  editarItemLista(itemEmEdicao: Item, nomeNovoItem: string): void {
    const itemEditado: Item = this.editarItem(itemEmEdicao, nomeNovoItem);
    const index = this.listaDeCompra.findIndex(i => i.id === itemEmEdicao.id);

    if (index !== -1) {
      this.listaDeCompra[index] = itemEditado;
    }
  }

  deletarItemNaLista(id: number) : void {
    const index = this.listaDeCompra.findIndex(i => i.id === id);

    if (index !== -1) {
      this.listaDeCompra.splice(index, 1);
    }
  }

  atualizarLocalStorage(): void {
    localStorage.setItem('listaDeCompra', JSON.stringify(this.listaDeCompra));
  }

  limparListaDeCompra(): void {
    this.listaDeCompra = [];  }
}
