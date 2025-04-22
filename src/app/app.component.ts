import { Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, DoCheck{
  title = 'app-lista-de-compras';
  listaCompras!: Item[];
  itemParaSerEditado!: Item;

  constructor(private listaCompraService: ListaDeCompraService) { }

  ngOnInit(): void {
    this.listaCompras = this.listaCompraService.getListaDeCompra();
    console.log('AppComponent - ngOnInit');
  }

  ngOnChanges(): void {
    console.log('AppComponent - ngOnChanges');
  }

  ngDoCheck(): void {
    console.log('AppComponent - ngDoCheck');
    this.listaCompraService.atualizarLocalStorage();
  }

  editarItem(item: Item): void {
    this.itemParaSerEditado = item;
  }

  deletarItem(id: number): void {
    this.listaCompras = this.listaCompras.filter(item => item.id !== id);
    //this.listaCompraService.deletarItem(id);
  }
}
