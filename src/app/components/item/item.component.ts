import { Component, Input, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item!: Item;

  faPen: IconProp = faPen as IconProp;
  faTrash: IconProp = faTrash as IconProp;
  iconStyle: any = {
    color: '#859dd6'
  }

  constructor() { }

  ngOnInit(): void { }

}
