import { Component } from '@angular/core';
import { slideInAnimation } from '../../../common/route.animation';
import { ChildrenOutletContexts } from '@angular/router';

@Component({
  selector: 'app-main-base',
  templateUrl: './main-base.component.html',
  styleUrl: './main-base.component.scss',
  animations: [slideInAnimation]

})
export class MainBaseComponent {
  constructor(private contexts: ChildrenOutletContexts) { }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.component;
  }
}
