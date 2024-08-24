import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuBarComponent } from "./menu/menu-bar/menu-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ MenuBarComponent, RouterModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'online-cv';
}
