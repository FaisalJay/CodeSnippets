import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public syncToLocalStorage(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  public syncFromLocalStorage(key: string):any {
    const data = JSON.parse(localStorage.getItem(key));
    return data;
  }

  public syncToSessionStorage(key: string, data: any) {
    sessionStorage.setItem(key, JSON.stringify(data));
  }

  public syncFromSessionStorage(key: string):any {
    const data = JSON.parse(sessionStorage.getItem(key));
    return data;
  }
}
