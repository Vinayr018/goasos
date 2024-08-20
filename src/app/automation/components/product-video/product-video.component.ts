import { AfterContentInit, AfterViewInit, Component, ContentChildren, ElementRef, Input, OnInit, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { BaseLocationService } from '../../../common/services/base-location.service';
import { ProductVideo } from '../../../common/models';

@Component({
  selector: 'app-product-video',
  templateUrl: './product-video.component.html',
  styleUrl: './product-video.component.scss'
})
export class ProductVideoComponent implements OnInit, AfterViewInit, AfterContentInit {

  @ContentChildren(TemplateRef) templates!: QueryList<TemplateRef<any>>;

  @ViewChild('vid') private video!: ElementRef<HTMLVideoElement>;
  @ViewChild('prod') private productText!: ElementRef<HTMLDivElement>;

  @Input({ required: true }) public videos: ProductVideo[] = [];

  public videoLink: string = '';
  public currentIndex: number = 0;

  constructor(public path: BaseLocationService) {
  }

  ngAfterContentInit(): void {
    console.log('contentinit', this.templates?.length)
  }

  ngOnInit(): void {
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
    const allSpans = this.productText.nativeElement.children;

    for (let index = 0; index < allSpans.length; index++) {
        const sp = allSpans[index] as HTMLSpanElement;
        if (sp.style.display === 'inline' && index !== this.currentIndex) {
          sp.style.display = 'none';
        }
    }

    const activeSpan = (allSpans[this.currentIndex] as HTMLSpanElement);
    activeSpan.style.display = 'inline';
  }
}
