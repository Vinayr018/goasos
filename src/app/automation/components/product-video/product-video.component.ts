import { AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BaseLocationService } from '../../../common/services/base-location.service';

@Component({
  selector: 'app-product-video',
  templateUrl: './product-video.component.html',
  styleUrl: './product-video.component.scss'
})
export class ProductVideoComponent implements OnInit, AfterViewInit {

  @ViewChild('vid') private video!: ElementRef<HTMLVideoElement>;
  @ViewChild('index0', { static: true }) private one!: TemplateRef<any>;
  @ViewChild('index1', { static: true }) private two!: TemplateRef<any>;
  @ViewChild('index2', { static: true }) private three!: TemplateRef<any>;
  @ViewChild('index3', { static: true }) private four!: TemplateRef<any>;
  @ViewChild('index4', { static: true }) private five!: TemplateRef<any>;

  public videos: any[] = [];

  public videoLink: string = '';
  public currentIndex: number = 0;

  constructor(public path: BaseLocationService) {
  }

  ngOnInit(): void {
    this.videos = [
      { template: this.one, videoLink: 'images/automation/home/gate_automation.mp4', content: 'Control the gate operation via mobile app.' },
      { template: this.two, videoLink: 'images/automation/home/lights_and_fan.mp4', content: 'Control the lights and fans via mobile app.' },
      { template: this.three, videoLink: 'images/automation/home/switch.mp4', content: 'electronic switch with light color control.' },
      { template: this.four, videoLink: 'images/automation/home/window_blind_control.mp4', content: 'Control curtains/blinds via mobile app.' },
      { template: this.five, videoLink: 'images/automation/home/voicecontrol.mp4', content: 'Control your home electronics via voice control (alexa).' },
    ];
    this.videoLink = this.videos[this.currentIndex].videoLink;
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
    this.videoLink = this.videos[this.currentIndex].videoLink;
    this.video.nativeElement.load();
    this.video.nativeElement.play();
  }

  private LoadContent(): void {
    const allSpans = document.querySelectorAll('.product-video-text span');

    allSpans.forEach((s: Element, index: number) => {
      const sp = s as HTMLSpanElement;
      if (sp.style.display === 'inline' && index !== this.currentIndex) {
        sp.style.display = 'none';
      }
    });

    const activeSpan = (allSpans[this.currentIndex] as HTMLSpanElement);
    activeSpan.style.display = 'inline';
  }
}
