import { Component } from '@angular/core';
import { ContactFormComponent } from "../contact-form/contact-form.component";
import { Clipboard } from '@angular/cdk/clipboard';
import { Router } from '@angular/router';
import { PhotoFrame } from '../../shared/photo-frame/photo-frame.model';
import { PhotoFrameComponent } from "../../shared/photo-frame/photo-frame.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent, PhotoFrameComponent, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  emailButtonName: string;
  emailString: string = "Email";
  myEmail: string = "rosie.em.jeffery@gmail.com";

  gitHubButtonName: string;
  gitHubString: string = "GitHub";
  myGitHub: string = "rosie-jeffery";

  linkedInButtonName: string;
  linkedInString: string = "LinkedIn";
  myLinkedIn: string = "Rosie Jeffery";

  photosColOne: PhotoFrame[];
  photosColTwo: PhotoFrame[];
  photosColThree: PhotoFrame[];

  constructor( private clipboard: Clipboard, private router: Router ) {
    this.gitHubButtonName = this.gitHubString;
    this.emailButtonName = this.emailString;
    this.linkedInButtonName = this.linkedInString;

    this.photosColOne = [
      {
        title: "",
        path: "/pictures/IMG_3988 Large.jpeg",
        caption: "",
      },
      {
        title: "Rosie BeReal",
        path: "/pictures/IMG_2693 Large.jpeg",
        caption: "",
      },
      {
        title: "Water of Leith",
        path: "/pictures/IMG_3928 Large.jpeg",
        caption: "",
      },
    ]

    this.photosColTwo = [
      {
        title: "",
        path: "/pictures/IMG_3988 Large.jpeg",
        caption: "",
      },
      {
        title: "Rosie BeReal",
        path: "/pictures/IMG_2693 Large.jpeg",
        caption: "",
      },
      {
        title: "Water of Leith",
        path: "/pictures/IMG_3928 Large.jpeg",
        caption: "",
      },
    ]

    this.photosColThree = [
      {
        title: "",
        path: "/pictures/IMG_3988 Large.jpeg",
        caption: "",
      },
      {
        title: "Rosie BeReal",
        path: "/pictures/IMG_2693 Large.jpeg",
        caption: "",
      },
      {
        title: "Water of Leith",
        path: "/pictures/IMG_3928 Large.jpeg",
        caption: "",
      },
    ]
  }

  toggleEmailButtonText(): void {
    if (this.emailButtonName === this.emailString) {
      this.emailButtonName = this.myEmail;
      this.copyText(this.myEmail);
    }
    else {
      this.emailButtonName = this.emailString;
    }
  }

  toggleLinkedInButtonText(): void {
    if (this.linkedInButtonName === this.linkedInString) {
      this.linkedInButtonName = this.myLinkedIn;
    }
    else {
      this.linkedInButtonName = this.linkedInString;
    }
  }

  toggleGitHubButtonText(): void {
    if (this.gitHubButtonName === this.gitHubString) {
      this.gitHubButtonName = this.myGitHub;
    }
    else {
      this.gitHubButtonName = this.gitHubString;
    }
  }

  copyText(textToCopy: string): void {
    this.clipboard.copy(textToCopy);
  }
}
