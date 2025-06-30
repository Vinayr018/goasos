import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { VideoDialogService } from '../../services/video-dialog.service';

@Component({
  selector: 'app-video-dialog',
  templateUrl: './video-dialog.component.html',
  styleUrl: './video-dialog.component.scss'
})
export class VideoDialogComponent {

  public src: string;
  @ViewChild('btn') private btn!: ElementRef<HTMLButtonElement>;

  constructor(public ser: VideoDialogService) {
    this.src = '';
    this.ser.videoDuration$.subscribe(s => {
      console.log('duration component', s);
      if (!s && this.btn?.nativeElement) {
        this.btn.nativeElement.focus();
      }
    });
  }
}
