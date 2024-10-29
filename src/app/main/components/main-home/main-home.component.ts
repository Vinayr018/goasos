import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { BaseLocationService } from '../../../common/services/base-location.service';
import { Router } from '@angular/router';
import { GoasosTitleService } from '../../../common/services/title.service';
import { MetaService } from '../../../common/services/meta.service';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrl: './main-home.component.scss'
})
export class MainHomeComponent implements AfterViewInit {

  public automationImages: any[] = [
    { src: '/images/automation/home/doorlock.jpg', alt: 'door lock' },
    { src: '/images/automation/home/home.jpg', alt: 'Home' },
    { src: '/images/automation/home/light.png', alt: 'lighting' },
    { src: '/images/automation/home/smarthome.jpg', alt: 'smarthome' },
  ];

  public consultingImages: any[] = [
    { src: '/images/consulting/card.webp', alt: 'cards' },
    { src: '/images/consulting/investment.webp', alt: 'investment' },
    { src: '/images/consulting/lending.webp', alt: 'lending' },
    { src: '/images/consulting/retail.webp', alt: 'retail' },
    { src: '/images/consulting/wealth.webp', alt: 'wealth' },
  ];

  private currentAutomationIndex = 0;
  private automationSliders: HTMLDivElement[];

  private currentConsultingIndex = 0;
  private consultingSliders: HTMLDivElement[];

  constructor(public base: BaseLocationService,
    private router: Router,
    private title: GoasosTitleService,
    private meta: MetaService
  ) {
    this.automationSliders = [];
    this.consultingSliders = [];
    title.UpdateTitle = 'Home';
    meta.Description = 'Goasos home page';
    meta.Keywords = 'goasos home page, enter the world of automation, enter the world of consulting, your concern is our innovation';
  }

  ngAfterViewInit(): void {
    this.PrepSlideShow('.automation-slide-it .img', 2);
    setTimeout(() => {
      this.PrepSlideShow('.consult-slide-it .img', 1);
    }, 200);
  }

  private PrepSlideShow(selector: string, type: number): void {
    const eles = document.querySelectorAll(selector);
    if (eles && eles.length > 0) {
      if (type === 1) {
        this.consultingSliders = Array.from(eles) as HTMLDivElement[];
      } else {
        this.automationSliders = Array.from(eles) as HTMLDivElement[];
      }
    }
    setInterval(() => {
      this.StartSlideShow(type);
    }, 3500);
  }

  private getMaxAndNextIndex(images: any[], currentIndex: number): [number, number] {
    const maxIndex = images.length - 1;
    return [maxIndex, currentIndex + 1 > maxIndex ? 0 : currentIndex + 1];
  }

  private getParameters(type: number):
    [number, number, number, HTMLDivElement[]] {
    let max = -1, next = -1;
    switch (type) {
      case 1:
        [max, next] =
          this.getMaxAndNextIndex(this.consultingImages,
            this.currentConsultingIndex);
        return [max, next,
          this.currentConsultingIndex,
          this.consultingSliders];

      default:
        [max, next] =
          this.getMaxAndNextIndex(this.automationImages,
            this.currentAutomationIndex);
        return [max, next,
          this.currentAutomationIndex,
          this.automationSliders];
    }
  }

  private setParameters(type: number, next: number):
    void {
    switch (type) {
      case 1:
        this.currentConsultingIndex = next;
        return;

      default:
        this.currentAutomationIndex = next;
    }
  }

  private StartSlideShow(type: number): void {

    let [max, next, currentIndex, sliders]
      = this.getParameters(type);

    if (sliders.length <= 0) {
      return;
    }

    const currentDiv = sliders[currentIndex],
      nextDiv = sliders[next];

    nextDiv.style.display = 'flex';

    setTimeout(() => {
      currentDiv.style.display = 'none';
      currentDiv.style.left = '500%';
    }, 800);
    setTimeout(() => {
      currentDiv.style.left = '-500%';
      nextDiv.style.left = '0';
    }, 100);

    this.setParameters(type, next);
  }

  public Navigate(url: string): void {
    this.router.navigateByUrl(url)
  }
}
