import { Component, Input } from '@angular/core';
import { Box } from '../../models';
import { BaseLocationService } from '../../services/base-location.service';

@Component({
  selector: 'app-brochure',
  templateUrl: './brochure.component.html',
  styleUrl: './brochure.component.scss'
})
export class BrochureComponent {

  @Input({ required: true }) public title!: string;

  @Input({ required: true }) public boxes!: Box[];

  constructor(public base: BaseLocationService) { }

}
