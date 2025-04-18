import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {
  @Input() itemParaSerEditado!: Item;
  editando: boolean = false;
  textoBtn: string = 'Salvar item';
  nomeItem: string = '';

  constructor(private listaCompraService: ListaDeCompraService) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('InputComponent - ngOnChanges');

    if (!changes['itemParaSerEditado'].firstChange) {
      this.alternarModoEdicao()
      this.nomeItem = this.itemParaSerEditado.nome;
    }
  }

  modificarItem(): void {
    if (this.nomeItem.trim() === '') {
      alert('O campo nome é obrigatório.');
      return;
    }

    const nomeItemFormatado: string = this.formatarNomeItem();

    if(this.editando) {
      this.listaCompraService.editarItemLista(this.itemParaSerEditado, nomeItemFormatado);
      this.alternarModoEdicao();
    } else {

      this.listaCompraService.adicionarItemLista(nomeItemFormatado);
    }

    this.limparCampo();
  }

  limparCampo(): void {
    this.nomeItem = '';
  }

  alternarModoEdicao(): void {
    this.editando = !this.editando;
    this.textoBtn = this.editando ? 'Editar item' : 'Salvar item';
  }

  formatarNomeItem(): string {
    const nomeItemFormatado = this.nomeItem.trim().toLowerCase();
    return nomeItemFormatado.charAt(0).toUpperCase() + this.nomeItem.slice(1);
  }
}
