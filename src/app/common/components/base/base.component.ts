import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss'
})
export class BaseComponent {

  @ViewChild('men') private menuDiv!: ElementRef<HTMLDivElement>

  public ShowSideMenu(): void {
    this.menuDiv.nativeElement.classList.add('show');
  }

  public HideSideMenu(): void {
    this.menuDiv.nativeElement.classList.remove('show');
  }
}
