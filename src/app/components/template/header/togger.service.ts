import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggerService {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  toggleSomeFeature() {
    this.isSidebarOpen = this.isSidebarOpen;
  }
  constructor() { }
}
