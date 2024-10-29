import { Component } from '@angular/core';
import { MetaService } from '../../../common/services/meta.service';
import { GoasosTitleService } from '../../../common/services/title.service';

@Component({
  selector: 'app-main-about',
  templateUrl: './main-about.component.html',
  styleUrl: './main-about.component.scss'
})
export class MainAboutComponent {
  constructor(title: GoasosTitleService,
    meta: MetaService) {
    title.UpdateTitle = 'About us';
    meta.Description = 'about us or about goasos.com';
    meta.Keywords = 'goasos, about us, about goasos.com';
  }
}
