import { Component } from '@angular/core';
import { GoasosTitleService } from '../../../common/services/title.service';
import { MetaService } from '../../../common/services/meta.service';

@Component({
  selector: 'app-main-contact',
  templateUrl: './main-contact.component.html',
  styleUrl: './main-contact.component.scss'
})
export class MainContactComponent {
  constructor(title: GoasosTitleService,
    meta: MetaService) {
    title.UpdateTitle = 'Contact us';
    meta.Description = 'goasos contact form, locations and social media links';
    meta.Keywords = 'goasos, indiranagar branch bangalore, bhubaneswar branch, cuttack branch, locatios, call, email';
  }
}
