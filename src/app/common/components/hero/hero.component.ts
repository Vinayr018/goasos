import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class HeroComponent {
  @Input({ required: true }) public showCLient!: boolean;
  @Input({ required: true }) public h1!: string;
  @Input({ required: true }) public p!: string;
}
