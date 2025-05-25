import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { BaseLocationService } from '../../../common/services/base-location.service';
import { Router } from '@angular/router';
import { GoasosTitleService } from '../../../common/services/title.service';
import { MetaService } from '../../../common/services/meta.service';
import { AnalyticsService } from '../../../common/services/analytics.service';
import { ContactLocationService } from '../../../common/services/contact-location.service';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrl: './main-home.component.scss'
})
export class MainHomeComponent {

  constructor(private router: Router,
    title: GoasosTitleService,
    meta: MetaService,
    public analytics: AnalyticsService,
    public cont: ContactLocationService
  ) {
    title.UpdateTitle = 'Automation Solutions Provider | Automation Services Company in India | GOAS';
    meta.Description = 'Empowering businesses with smart home, office, industrial and energy automation along with expert software consulting in Banking, Capital Markets, and Data & AI - serving Bangalore, Bhubaneswar, and Cuttack.';
    meta.Keywords = 'goasos home page, enter the world of automation, enter the world of consulting, your concern is our innovation';
  }

  public CaptureClicks(cta: string): void {
    this.analytics.HomeCtaEvent(cta);
  }
}
