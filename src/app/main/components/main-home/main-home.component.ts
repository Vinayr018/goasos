import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { BaseLocationService } from '../../../common/services/base-location.service';
import { Router } from '@angular/router';

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
    private router: Router
  ) {
    this.automationSliders = [];
    this.consultingSliders = [];
  }

  ngAfterViewInit(): void {
    this.PrepAutomationSlideShow();
    setTimeout(() => {
      this.PrepConsultingSlideShow();
    }, 200);
  }

  private PrepAutomationSlideShow() {
    const eles = document.querySelectorAll('.automation-slide-it .img');
    if (eles && eles.length > 0) {
      this.automationSliders = Array.from(eles) as HTMLDivElement[];
    }
    setInterval(() => {
      this.StartAutomationSlideShow();
    }, 3500);
  }

  private PrepConsultingSlideShow() {
    const eles = document.querySelectorAll('.consult-slide-it .img');
    if (eles && eles.length > 0) {
      this.consultingSliders = Array.from(eles) as HTMLDivElement[];
    }
    setInterval(() => {
      this.StartConsultingSlideShow();
    }, 3500);
  }

  private StartConsultingSlideShow(): void {
    if (this.consultingSliders.length <= 0) {
      return;
    }

    let maxIndex = this.consultingImages.length - 1;
    const nextIndex = this.currentConsultingIndex + 1 > maxIndex ? 0 : this.currentConsultingIndex + 1;

    const currentDiv = this.consultingSliders[this.currentConsultingIndex],
      nextDiv = this.consultingSliders[nextIndex];

    nextDiv.style.display = 'flex';

    setTimeout(() => {
      currentDiv.style.display = 'none';
      currentDiv.style.left = '500%';
    }, 800);
    setTimeout(() => {
      currentDiv.style.left = '-500%';
      nextDiv.style.left = '0';
    }, 100);

    this.currentConsultingIndex = nextIndex;
  }

  private StartAutomationSlideShow(): void {
    if (this.automationSliders.length <= 0) {
      return;
    }

    let maxIndex = this.automationImages.length - 1;
    const nextIndex = this.currentAutomationIndex + 1 > maxIndex ? 0 : this.currentAutomationIndex + 1;

    const currentDiv = this.automationSliders[this.currentAutomationIndex],
      nextDiv = this.automationSliders[nextIndex];

    nextDiv.style.display = 'flex';

    setTimeout(() => {
      currentDiv.style.display = 'none';
      currentDiv.style.left = '500%';
    }, 800);
    setTimeout(() => {
      currentDiv.style.left = '-500%';
      nextDiv.style.left = '0';
    }, 100);

    this.currentAutomationIndex = nextIndex;
  }

  public Navigate(url: string): void {
    this.router.navigateByUrl(url)
  }
}
