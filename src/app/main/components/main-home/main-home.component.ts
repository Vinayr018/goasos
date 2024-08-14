import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrl: './main-home.component.scss'
})
export class MainHomeComponent implements AfterViewInit {

  public automationImages: any[] = [
    { src: '/images/automation/doorlock.jpg', alt: 'door lock' },
    { src: '/images/automation/home.jpg', alt: 'Home' },
    { src: '/images/automation/light.png', alt: 'lighting' },
    { src: '/images/automation/smarthome.jpg', alt: 'smarthome' },
  ];

  private currentIndex = 0;
  private automationSliders: HTMLDivElement[];

  constructor() {
    this.automationSliders = [];
  }

  ngAfterViewInit(): void {
    const eles = document.querySelectorAll('.automation-slide-it .img');
    if (eles && eles.length > 0) {
      this.automationSliders = Array.from(eles) as HTMLDivElement[];
    }
    setInterval(() => {
      this.MoveIt();
    }, 3500);
  }

  ngOnInit(): void {
  }

  private MoveIt(): void {
    if (this.automationSliders.length <= 0) {
      return;
    }

    let maxIndex = this.automationImages.length - 1;
    const nextIndex = this.currentIndex + 1 > maxIndex ? 0 : this.currentIndex + 1;

    const currentDiv = this.automationSliders[this.currentIndex],
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

    this.currentIndex = nextIndex;
  }
}
