import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  contactReactiveForm = new FormGroup(
    {
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      message: new FormControl(''),
    }
  )
}
