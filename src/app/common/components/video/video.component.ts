import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss'
})
export class VideoComponent {
  @Input({ required: true }) public title!: string;
  @Input({ required: true }) public src!: string;
  @Input() public embed: boolean = false;
  @Input() public poster: string = '';
}
