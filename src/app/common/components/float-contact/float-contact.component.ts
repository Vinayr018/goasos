import { Component } from '@angular/core';
import { VideoDialogService } from '../../services/video-dialog.service';

@Component({
  selector: 'app-float-contact',
  templateUrl: './float-contact.component.html',
  styleUrl: './float-contact.component.scss'
})
export class FloatContactComponent {

  constructor(private videoService: VideoDialogService) { }

  public PlayVideo(): void {
    this.videoService.PlayVideo();
  }
}
