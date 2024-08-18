import { Component } from '@angular/core';
import { LongBioComponent } from "../long-bio/long-bio.component";
import { PhotoFrameComponent } from "../../shared/photo-frame/photo-frame.component";
import { PhotoFrame } from '../../shared/photo-frame/photo-frame.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [LongBioComponent, PhotoFrameComponent, CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  photos: PhotoFrame[];

  constructor() {
    this.photos = [
      {
        title: "Worcestershire Beacon",
        path: "https://github.com/rosie-jeffery/rosie-jeffery.github.io/blob/create-working-draft/online-cv/shared/pictures/IMG_4126%20Large.jpeg",
        caption: "",
      },
      {
        title: "Beach on the Isle of Harris",
        path: "https://github.com/rosie-jeffery/rosie-jeffery.github.io/blob/create-working-draft/online-cv/shared/pictures/IMG_4220%20Large.jpeg",
        caption: '',
      },
      {
        title: "Glasgow Botanic Gardens",
        path: "https://github.com/rosie-jeffery/rosie-jeffery.github.io/blob/create-working-draft/online-cv/shared/pictures/IMG_3988%20Large.jpeg",
        caption: '',
      },
      {
        title: "Water of Leith",
        path: "https://github.com/rosie-jeffery/rosie-jeffery.github.io/blob/create-working-draft/online-cv/shared/pictures/IMG_3928%20Large.jpeg",
        caption: '',
      },
      {
        title: "Lunchtime Snack",
        path: "https://github.com/rosie-jeffery/rosie-jeffery.github.io/blob/create-working-draft/online-cv/shared/pictures/IMG_2693%20Large.jpeg",
        caption: '',
      },
    ]
  }
}
