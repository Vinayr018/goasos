import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoasosTitleService } from '../../../common/services/title.service';
import { MetaService } from '../../../common/services/meta.service';
import { AnalyticsService } from '../../../common/services/analytics.service';
import { ContactLocationService } from '../../../common/services/contact-location.service';
import { SchemaService } from '../../../common/services/schema.service';
import { HomeSchema } from '../../../common/models/schema';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrl: './main-home.component.scss',
  providers: [SchemaService]
})
export class MainHomeComponent implements OnInit, OnDestroy {

  constructor(private router: Router,
    title: GoasosTitleService,
    meta: MetaService,
    public analytics: AnalyticsService,
    public cont: ContactLocationService,
    private schemaService: SchemaService
  ) {
    title.UpdateTitle = 'Automation Solutions Provider | Automation Services Company in India | GOAS';
    meta.Description = 'Empowering businesses with smart home, office, industrial and energy automation along with expert software consulting in Banking, Capital Markets, and Data & AI - serving Bangalore, Bhubaneswar, and Cuttack.';
    meta.Keywords = 'goasos home page, enter the world of automation, enter the world of consulting, your concern is our innovation';
  }
  ngOnDestroy(): void {
    this.schemaService.RemoveSchema();
  }

  ngOnInit(): void {
    this.schemaService.UpdateSchema(new HomeSchema());
  }

  public CaptureClicks(cta: string): void {
    this.analytics.HomeCtaEvent(cta);
  }
}
