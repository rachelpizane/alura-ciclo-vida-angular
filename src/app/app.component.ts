import { Component, OnChanges, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'app-lista-de-compras';
  listaCompras!: Item[];

  constructor(private listaCompraService: ListaDeCompraService) { }

  ngOnInit(): void {
    this.listaCompras = this.listaCompraService.getListaDeCompra();
    console.log('AppComponent - ngOnInit');
  }

  ngOnChanges(): void {
    console.log('AppComponent - ngOnChanges');
  }
}
