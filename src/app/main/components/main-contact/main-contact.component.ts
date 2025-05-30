import { Component, OnDestroy, OnInit } from '@angular/core';
import { GoasosTitleService } from '../../../common/services/title.service';
import { MetaService } from '../../../common/services/meta.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MainGeoComponent } from '../main-geo/main-geo.component';
import { SchemaService } from '../../../common/services/schema.service';
import { ContactSchema } from '../../../common/models/schema';

@Component({
  selector: 'app-main-contact',
  templateUrl: './main-contact.component.html',
  styleUrl: './main-contact.component.scss',
  providers: [SchemaService]
})
export class MainContactComponent implements OnInit, OnDestroy {
  constructor(title: GoasosTitleService,
    meta: MetaService,
    private schemaService: SchemaService,
    private sheet: MatBottomSheet) {
    title.UpdateTitle = 'Contact Us | Generation Of Automation Solutions - GOAS';
    meta.Description = 'goasos contact form, locations and social media links';
    meta.Keywords = 'goasos, indiranagar branch bangalore, bhubaneswar branch, cuttack branch, locatios, call, email';
  }

  ngOnDestroy(): void {
    this.schemaService.RemoveSchema();
  }

  ngOnInit(): void {
    this.schemaService.UpdateSchema(new ContactSchema());
  }

  public LaunchGeo(): void {
    this.sheet.open(MainGeoComponent);
  }
}
