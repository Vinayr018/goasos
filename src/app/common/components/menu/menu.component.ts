import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  public ToggleMenu(event: MouseEvent): void {
    const menu = (event.target as HTMLAnchorElement).nextElementSibling as HTMLUListElement;
    menu.classList.toggle('show');
  }

}
