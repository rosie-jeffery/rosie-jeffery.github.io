import { Component } from '@angular/core';
import { ContactFormComponent } from "../contact-form/contact-form.component";
import { Clipboard } from '@angular/cdk/clipboard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ ContactFormComponent ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  emailButtonName: string;
  emailString: string = "Email";
  myEmail: string = "rosie.em.jeffery@gmail.com";

  gitHubButtonName: string;
  gitHubString: string = "GitHub";
  myGitHub: string = "https://github.com/rosie-jeffery";

  linkedInString: string = "LinkedIn";
  linkedInButtonName: string;
  myLinkedIn: string = "www.linkedin.com/in/rosie-jeffery";

  constructor( private clipboard: Clipboard, private router: Router ) {
    this.gitHubButtonName = this.gitHubString;
    this.emailButtonName = this.emailString;
    this.linkedInButtonName = this.linkedInString;
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
