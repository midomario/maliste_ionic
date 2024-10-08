import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Item } from '../items/item.model';
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private apiUrl = 'http://localhost:3000/api/items';

  constructor(
    private http : HttpClient,
  ) { }

  getItems(): Observable<Item[]> {
    // Get items from backend
    return this.http.get<Item[]>(this.apiUrl);
  }

  storeItem(item: Item): Observable<Item> {
    // Store item to backend
    return this.http.post<Item>(this.apiUrl, item);
  }

  deleteItem(item: Item): Observable<Item> {
    // Store item to backend
    return this.http.delete<Item>(this.apiUrl+'/'+item.id);
  }

}
