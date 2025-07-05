import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { VideoDialogService } from '../../services/video-dialog.service';

@Component({
  selector: 'app-video-dialog',
  templateUrl: './video-dialog.component.html',
  styleUrl: './video-dialog.component.scss'
})
export class VideoDialogComponent {

  constructor(public ser: VideoDialogService) { }
}
