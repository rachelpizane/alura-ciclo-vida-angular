import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item!: Item;
  @Output() emitindoItemParaEditar = new EventEmitter<Item>();
  @Output() emitindoItemParaDeletar = new EventEmitter<number>();

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

  ngOnDestroy(): void {
    console.log('ItemComponent - ngOnDestroy');
  }

  emitirEditarItem(): void {
    this.emitindoItemParaEditar.emit(this.item);
  }

  emitirDeletarItem(): void {
    this.emitindoItemParaDeletar.emit(this.item.id);
  }

  itemSelecionado(): void {
    this.item.comprado = !this.item.comprado;
  }
}
