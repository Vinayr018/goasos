import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-contact-social',
  templateUrl: './main-contact-social.component.html',
  styleUrl: './main-contact-social.component.scss'
})
export class MainContactSocialComponent implements OnInit, OnDestroy, AfterViewInit {
  
  ngAfterViewInit(): void {
    this.handler();
  }

  ngOnDestroy(): void {
    this.div = undefined;
  }

  ngOnInit(): void {
    document.querySelector('div.main-content')!
      .addEventListener('scroll', () => this.handler());
  }

  @ViewChild('d') private div: ElementRef<HTMLDivElement> | undefined;

  private handler(): void {
    const isInViewport = this.IsInViewport(this.div?.nativeElement);
    if (isInViewport) {
      this.AddAnimation(document.querySelector('ul.social') as HTMLUListElement);
    }

    console.log('isDiv', this.div?.nativeElement, isInViewport);
  }

  private IsInViewport(element: HTMLDivElement | undefined): boolean {
    if (!element) {
      return false;
    }

    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  private AddAnimation(ul: HTMLUListElement): void {
    console.log(ul.children);
    for (let index = 0; index < ul.children.length; index++) {
      const child = ul.children[index] as HTMLLIElement;
      child.style.animation = `rotate 0.4s ease-in-out ${1.1 + (index * 0.1)}s 1 forwards`;
    }
  }
}
