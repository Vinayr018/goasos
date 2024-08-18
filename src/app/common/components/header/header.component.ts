import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @ViewChild('nav') private nav!: ElementRef<HTMLElement>;

  public ShowHeaderMenu(): void {
    this.nav.nativeElement.classList.add('show');
  }

  @HostListener('document:click', ['$event'])
  private HideHeaderMenu(event: MouseEvent): void {
    const clickedElement = (event.target as HTMLElement);
    const hamButton = this.closestParent(clickedElement, 'button.ham');

    if (!hamButton && this.nav) {
      this.nav.nativeElement.classList.remove('show');
    }
  }

  private closestParent(element: HTMLElement, selector: string): HTMLElement | null {
    let parent: HTMLElement | null = element.parentElement;

    while (parent) {
      if (parent.matches(selector)) {
        return parent;
      }
      parent = parent.parentElement;
    }

    return null;
  }
}
