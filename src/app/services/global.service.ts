import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  logged = false;
  constructor() { }

  login() {
    this.logged = true;
    localStorage.setItem('logged', 'true');
  }
  logout() {
    this.logged = false;
  }
}
