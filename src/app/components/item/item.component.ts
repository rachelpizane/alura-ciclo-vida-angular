import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {
  @Input() item!: Item;
  @Output() emitindoItemParaEditar = new EventEmitter<Item>();

  faPen: IconProp = faPen as IconProp;
  faTrash: IconProp = faTrash as IconProp;
  iconStyle: any = {
    color: '#859dd6',
    cursor: 'pointer',
  }

  constructor() { }

  ngOnInit(): void {
    console.log('ItemComponent - ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('ItemComponent - ngOnChanges');
  }

  ngDoCheck(): void {
    console.log('ItemComponent - ngDoCheck');
  }

  emitirEditarItem(): void {
    this.emitindoItemParaEditar.emit(this.item);
  }

  itemSelecionado(): void {
    this.item.comprado = !this.item.comprado;
  }
}
