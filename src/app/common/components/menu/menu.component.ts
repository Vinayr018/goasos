import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  @Output() public menuClickEvent: EventEmitter<void>;

  constructor() {
    this.menuClickEvent = new EventEmitter<void>();
  }

  public ToggleMenu(event: MouseEvent): void {
    const menu = (event.target as HTMLAnchorElement).nextElementSibling as HTMLUListElement;
    menu.classList.toggle('show');
  }

  public LinkClicked(): void {
    this.menuClickEvent.emit();
  }

}
