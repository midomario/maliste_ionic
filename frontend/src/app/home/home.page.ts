import { Component } from '@angular/core';
import { Item } from '../items/item.model';
import { Store } from '@ngrx/store';
import { addItem, loadItems } from '../items/item.actions';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items$: Item[] = [];
  toggleAddItem : boolean = false;
  name : string = '';

  constructor(
    private store: Store<{ items: { items: Item[] } }>
  ) {
    this.store.select((state) => state.items.items).subscribe((items) => {
      this.items$ = items; 
    });
  }


  ngOnInit() {
     this.store.dispatch(loadItems());
  }

  save()
  {
    const newItem: Item = { name: this.name };
    this.store.dispatch(addItem({ item: newItem }));
    this.name = ''; 
    this.store.dispatch(loadItems());
    this.closeAddModal();
  }

  closeAddModal()
  {
    this.toggleAddItem = false;
  }
  
}
