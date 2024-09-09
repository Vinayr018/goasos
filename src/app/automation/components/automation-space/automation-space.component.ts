import { Component, OnDestroy } from '@angular/core';
import { Box, VideoBox } from '../../../common/models';
import { AutomationDataService } from '../../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-automation-space',
  templateUrl: './automation-space.component.html',
  styleUrl: './automation-space.component.scss'
})
export class AutomationSpaceComponent implements OnDestroy {
  private subs: Subscription[];

  public videos: VideoBox[] = [];

  constructor(private service: AutomationDataService) {
    this.subs = [];
    this.subs.push(service.Space$.subscribe(v => this.videos = v));
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }
}
