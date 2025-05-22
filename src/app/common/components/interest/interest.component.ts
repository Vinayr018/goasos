import { Component, Input } from '@angular/core';
import { Interest } from '../../models';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrl: './interest.component.scss'
})
export class InterestComponent {
  @Input({ required: true }) public data!: Interest[];
}
