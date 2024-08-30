import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-box',
  templateUrl: './video-box.component.html',
  styleUrl: './video-box.component.scss'
})
export class VideoBoxComponent {
  @Input({ required: true }) public img!: string;
  @Input({ required: true }) public alt!: string;
  @Input({ required: true }) public header!: string;
  @Input({ required: true }) public body!: string;
}
