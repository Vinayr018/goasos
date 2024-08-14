import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from '../../../common/route.animation';

@Component({
  selector: 'app-automation-base',
  templateUrl: './automation-base.component.html',
  styleUrl: './automation-base.component.scss',
  animations: [slideInAnimation]
})
export class AutomationBaseComponent {

  constructor(private contexts: ChildrenOutletContexts) { }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.component;
  }
}
