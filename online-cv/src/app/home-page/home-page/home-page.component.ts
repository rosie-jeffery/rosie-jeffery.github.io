import { Component } from '@angular/core';
import { NameCardComponent } from "../name-card/name-card.component";
import { ShortBioComponent } from "../short-bio/short-bio.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NameCardComponent, ShortBioComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
