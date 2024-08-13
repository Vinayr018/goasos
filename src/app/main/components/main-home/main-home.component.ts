import { Component } from '@angular/core';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrl: './main-home.component.scss'
})
export class MainHomeComponent {

  public automationImages: any[] = [
    { src: '/images/automation/doorlock.jpg', alt: 'door lock' },
    { src: '/images/automation/home.jpg', alt: 'Home' },
    { src: '/images/automation/light.png', alt: 'lighting' },
    { src: '/images/automation/smarthome.jpg', alt: 'smarthome' },
  ];

}
