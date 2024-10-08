import { createAction, props } from '@ngrx/store';
import { Item } from './item.model';

export const loadItems = createAction('[Items] Load Items');

export const loadItemsSuccess = createAction(
  '[Items] Load Items Success',
  props<{ items: Item[] }>()
);

export const addItem = createAction(
  '[Items] Add Item',
  props<{ item: Item }>()
);

export const removeItem = createAction(
  '[Items] Remove Item',
  props<{ item: Item }>()
);