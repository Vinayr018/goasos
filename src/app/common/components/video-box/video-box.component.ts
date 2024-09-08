import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-box',
  templateUrl: './video-box.component.html',
  styleUrl: './video-box.component.scss'
})
export class VideoBoxComponent {
  @Input({ required: true }) public src!: string;
  @Input({ required: true }) public header!: string;
  @Input({ required: true }) public body!: string;
  @Input({ required: true }) public poster!: string;
}
