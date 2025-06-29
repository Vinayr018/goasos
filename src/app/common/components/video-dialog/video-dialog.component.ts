import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { VideoDialogService } from '../../services/video-dialog.service';

@Component({
  selector: 'app-video-dialog',
  templateUrl: './video-dialog.component.html',
  styleUrl: './video-dialog.component.scss'
})
export class VideoDialogComponent {

  public src: string;

  constructor(public ser: VideoDialogService) {
    this.src = '';
    this.ser.videoSrc$.subscribe(s => console.log('comp sub', s));
  }
}
