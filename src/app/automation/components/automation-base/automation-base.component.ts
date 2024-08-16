import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from '../../../common/route.animation';
import { BaseLocationService } from '../../../common/services/base-location.service';

@Component({
  selector: 'app-automation-base',
  templateUrl: './automation-base.component.html',
  styleUrl: './automation-base.component.scss',
  animations: [slideInAnimation],
  providers: [BaseLocationService]
})
export class AutomationBaseComponent {

  constructor(private contexts: ChildrenOutletContexts
  ) { }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.component;
  }
}
