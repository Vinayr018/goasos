import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from '../../../common/route.animation';
import { BaseLocationService } from '../../../common/services/base-location.service';

@Component({
  selector: 'app-consult-base',
  templateUrl: './consult-base.component.html',
  styleUrl: './consult-base.component.scss',
  animations: [slideInAnimation],
  providers: [BaseLocationService]
})
export class ConsultBaseComponent {

  constructor(private contexts: ChildrenOutletContexts
  ) { }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.component;
  }
}
