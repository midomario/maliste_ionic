import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadItems, loadItemsSuccess, addItem, removeItem } from './item.actions';
import { switchMap, map } from 'rxjs/operators';
import { ItemsService } from '../services/items.service';

@Injectable()
export class ItemEffects {

  constructor(private actions$: Actions, 
              private itemsService : ItemsService) {}

  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadItems),
      switchMap(() =>
        this.itemsService.getItems().pipe(
          map((items) => loadItemsSuccess({ items: items.reverse()}))
        )
      )
    )
  );

  addItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addItem),
      switchMap(({ item }) =>
        this.itemsService.storeItem(item).pipe(
          map(() => loadItems()) // Reload items after adding
        )
      )
    )
  );


  removeItem$ = createEffect(() =>
      this.actions$.pipe(
        ofType(removeItem),
        switchMap(({ item }) =>
          this.itemsService.deleteItem(item).pipe(
            map(() => loadItems()) // Reload items after deleting
          )
        )
      )
    );
  }