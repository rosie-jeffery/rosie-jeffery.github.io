import { Component } from '@angular/core';
import { LongBioComponent } from "../long-bio/long-bio.component";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [LongBioComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

}
