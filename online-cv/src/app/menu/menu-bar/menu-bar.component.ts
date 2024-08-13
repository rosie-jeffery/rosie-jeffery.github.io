import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../menu-item.model';
import { MenuItemComponent } from "../menu-item/menu-item.component";

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [CommonModule, MenuItemComponent],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
  menuItemList: MenuItem[];

  constructor() {
    this.menuItemList = [
      {
        title: "About Me"
      },
      {
        title: "Skills and Experience"
      },
      {
        title: "Projects and Learning"
      },
      {
        title: "Contact"
      }
    ];
  }
}
