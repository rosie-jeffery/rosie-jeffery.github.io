import { Component, Input } from '@angular/core';
import { PhotoFrame } from './photo-frame.model';

@Component({
  selector: 'app-photo-frame',
  standalone: true,
  imports: [],
  templateUrl: './photo-frame.component.html',
  styleUrl: './photo-frame.component.css'
})
export class PhotoFrameComponent {
  @Input() photoFrame!: PhotoFrame;
}
