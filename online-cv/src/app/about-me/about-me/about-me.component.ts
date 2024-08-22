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
  photosColOne: PhotoFrame[];
  photosColTwo: PhotoFrame[];
  photosColThree: PhotoFrame[];

  constructor() {
    this.photosColOne = [
      
      {
        title: "Worcestershire Beacon",
        path: "/pictures/IMG_4126 Large.jpeg",
        caption: "",
      },
      {
        title: "Rosie Jeffery (at Croft Castle)",
        path: "/pictures/IMG_0179 Large.jpeg",
        caption: '',
      },
      {
        title: "Water of Leith",
        path: "/pictures/IMG_3928 Large.jpeg",
        caption: "",
      },
    ]

    this.photosColTwo = [
      {
        title: "Landscape at the Kelvingrove Museum",
        path: "/pictures/IMG_3965 Large.jpeg",
        caption: '',
      },
      {
        title: "Rosie Jeffery (at the seaside)",
        path: "/pictures/IMG_4185 Large.jpeg",
        caption: '',
      },
      {
        title: "Beach on the Isle of Lewis",
        path: "/pictures/IMG_4220 Large.jpeg",
        caption: '',
      },
    ]

    this.photosColThree = [
      {
        title: "Rosie BeReal",
        path: "/pictures/IMG_2693 Large.jpeg",
        caption: "",
      },
      {
        title: "Glasgow Botanic Gardens",
        path: "/pictures/IMG_3988 Large.jpeg",
        caption: "",
      },
      {
        title: "Rosie (in Edinburgh Old Town)",
        path: "/pictures/IMG_4441 Large.jpeg",
        caption: '',
      },
    ]
  }
}
