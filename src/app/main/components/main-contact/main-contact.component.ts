import { Component } from '@angular/core';
import { GoasosTitleService } from '../../../common/services/title.service';
import { MetaService } from '../../../common/services/meta.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MainGeoComponent } from '../main-geo/main-geo.component';

@Component({
  selector: 'app-main-contact',
  templateUrl: './main-contact.component.html',
  styleUrl: './main-contact.component.scss'
})
export class MainContactComponent {
  constructor(title: GoasosTitleService,
    meta: MetaService,
    private sheet: MatBottomSheet) {
    title.UpdateTitle = 'Contact Us | Generation Of Automation Solutions - GOAS';
    meta.Description = 'goasos contact form, locations and social media links';
    meta.Keywords = 'goasos, indiranagar branch bangalore, bhubaneswar branch, cuttack branch, locatios, call, email';
  }

  public LaunchGeo(): void {
    this.sheet.open(MainGeoComponent);
  }
}
