import { Component, ElementRef, ViewChild } from '@angular/core';
import { IdentifierService } from './common/services';
import { CanonicalService } from './common/services/canonical.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { filter, map } from 'rxjs';
import { GoasosTitleService } from './common/services/title.service';
import { MetaService } from './common/services/meta.service';
import { AnalyticsService } from './common/services/analytics.service';
import { UserAnalyticsEvents } from './common/models/analytics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [IdentifierService, 
    CanonicalService, 
    GoasosTitleService,
    MetaService,
    AnalyticsService,
  UserAnalyticsEvents]
})
export class AppComponent {
  title = 'goasos';
  constructor(private ser: IdentifierService, private link: CanonicalService
  ) {
    link.AddLink();
  }

  @ViewChild('men') private menuDiv!: ElementRef<HTMLDivElement>

  public ShowSideMenu(): void {
    this.menuDiv.nativeElement.classList.add('show');
  }

  public HideSideMenu(): void {
    this.menuDiv.nativeElement.classList.remove('show');
  }

  getRouteAnimationData() {
    // return this.contexts.getContext('primary')?.route?.component;
  }
}
