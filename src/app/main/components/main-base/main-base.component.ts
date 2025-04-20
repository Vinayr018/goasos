import { Component, ElementRef, ViewChild } from '@angular/core';
import { slideInAnimation } from '../../../common/route.animation';
import { ChildrenOutletContexts } from '@angular/router';
import { BaseLocationService } from '../../../common/services/base-location.service';

@Component({
  selector: 'app-main-base',
  templateUrl: './main-base.component.html',
  styleUrl: './main-base.component.scss',
  animations: [slideInAnimation],
  providers: [BaseLocationService]
})
export class MainBaseComponent {
  constructor(private contexts: ChildrenOutletContexts,
    private base: BaseLocationService
  ) { }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.component;
  }

  @ViewChild('men') private menuDiv!: ElementRef<HTMLDivElement>

  public ShowSideMenu(): void {
    this.menuDiv.nativeElement.classList.add('show');
  }

  public HideSideMenu(): void {
    this.menuDiv.nativeElement.classList.remove('show');
  }
}
