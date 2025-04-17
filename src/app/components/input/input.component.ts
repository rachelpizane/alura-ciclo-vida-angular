import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  nomeItem: string = '';

  constructor(private listaCompraService: ListaDeCompraService) { }

  ngOnInit(): void { }

  adicionarItem(): void {
    if (this.nomeItem.trim() === '') {
      alert('O campo nome é obrigatório.');
      return;
    }

    const nomeItemFormatado: string = this.formatarNomeItem();

    this.listaCompraService.adicionarItemLista(nomeItemFormatado);

    this.limparCampo();
  }

  limparCampo(): void {
    this.nomeItem = '';
  }

  formatarNomeItem(): string {
    const nomeItemFormatado = this.nomeItem.trim().toLowerCase();
    return nomeItemFormatado.charAt(0).toUpperCase() + this.nomeItem.slice(1);
  }
}
