import { Injectable } from '@angular/core';
import { StorageKey } from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public get(key: string): any {
    return sessionStorage.getItem(key);
  }

  public set(key: string, value: any): void {
    sessionStorage.setItem(key, value);
  }

  public remove(key: StorageKey): void {
    sessionStorage.removeItem(key);
  }

  public clearAll() {
    sessionStorage.clear();
  }
}
