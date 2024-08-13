import { Component } from '@angular/core';
import { MenuItem } from '../interfaces/menu-item';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
  buttonNamesList: MenuItem[];

  constructor() {
    this.buttonNamesList = [];
  }
}
