import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { BaseLocationService } from '../../../common/services/base-location.service';

@Component({
  selector: 'app-product-video',
  templateUrl: './product-video.component.html',
  styleUrl: './product-video.component.scss'
})
export class ProductVideoComponent implements AfterViewInit {

  @ViewChild('vid') private video!: ElementRef<HTMLVideoElement>;

  private videos: string[] = [
    'images/automation/home/gate_automation.mp4',
    'images/automation/home/lights_and_fan.mp4',
    'images/automation/home/switch.mp4',
    'images/automation/home/window_blind_control.mp4',
    'images/automation/home/voicecontrol.mp4',
  ];

  public videoLink: string;
  public currentIndex: number = 0;

  constructor(public path: BaseLocationService) {
    this.videoLink = this.videos[this.currentIndex];
  }

  ngAfterViewInit(): void {
    this.video.nativeElement.muted = true;
    this.LoadVideo();
    this.LoadContent();
  }

  ControlButtonClicked(index: number): void {
    this.currentIndex = index;
    this.LoadVideo();
    this.LoadContent();
  }

  private LoadVideo(): void {
    this.videoLink = this.videos[this.currentIndex];
    this.video.nativeElement.load();
    this.video.nativeElement.play();
  }

  private LoadContent(): void {
    const allSpans = document.querySelectorAll('.product-video-text span');

    allSpans.forEach((s: Element, index: number) => {
      console.log('spindex', index);
      const sp = s as HTMLSpanElement;
      if (sp.style.display === 'inline' && index !== this.currentIndex) {
        sp.style.display = 'none';
      }
    });

    const activeSpan = (allSpans[this.currentIndex] as HTMLSpanElement);
    activeSpan.style.display = 'inline';
  }
}
