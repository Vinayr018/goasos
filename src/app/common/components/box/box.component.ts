import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrl: './box.component.scss'
})
export class BoxComponent {
  @Input({ required: true }) public img!: string;
  @Input({ required: true }) public alt!: string;
  @Input({ required: true }) public header!: string;
  @Input({ required: true }) public body!: string;
}
