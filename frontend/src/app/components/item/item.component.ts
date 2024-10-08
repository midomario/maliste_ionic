import { NgFor } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeItem } from 'src/app/items/item.actions';
import { Item } from 'src/app/items/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [NgFor],
})
export class ItemComponent   {

  @Input() item: Item = { name: '' , id: 0 };

  constructor(private store: Store<{ items: { items: Item[] } }>
  ) { }

  deleteItem() {
    this.store.dispatch(removeItem({ item: this.item }));
  }

}
