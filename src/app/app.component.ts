import { Component } from '@angular/core';
import { IdentifierService } from './common/services';
import { CanonicalService } from './common/services/canonical.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [IdentifierService, CanonicalService]
})
export class AppComponent {
  title = 'goasos';
  constructor(private ser: IdentifierService, private link: CanonicalService
  ) {
    link.AddLink();
  }
}
