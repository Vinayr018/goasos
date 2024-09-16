import { Component, Input } from '@angular/core';
import { SlideBox } from '../../models';

@Component({
  selector: 'app-slide-box',
  templateUrl: './slide-box.component.html',
  styleUrl: './slide-box.component.scss'
})
export class SlideBoxComponent {

  @Input({ required: true }) public box!: SlideBox;

  // public get slides(): any[] {
  //   return this.box.imgs.map(i => {
  //     return { src: i }
  //   });
  // }

  // public slides: any[] = [
  //   { src: '/images/automation/office/access.jpg' },
  //   { src: '/images/automation/office/conference.jpeg' },
  //   { src: '/images/automation/office/overall.webp' },
  //   { src: '/images/automation/office/parking.gif' },
  // ];
}
