import { createReducer, on } from '@ngrx/store';
import { loadItemsSuccess, addItem } from './item.actions';
import { Item } from './item.model';


export interface ItemState {
  items: Item[];
}

export const initialState: ItemState = {
  items: [],
};

const _itemReducer = createReducer(
  initialState,
  on(loadItemsSuccess, (state, { items }) => ({ ...state, items })),
  on(addItem, (state, { item }) => ({
    ...state,
    items: [...state.items, item],
  }))
);

export function itemReducer(state: any, action: any) {
  return _itemReducer(state, action);
}