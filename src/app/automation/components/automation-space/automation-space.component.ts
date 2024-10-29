import { Component, OnDestroy } from '@angular/core';
import { Box, VideoBox } from '../../../common/models';
import { AutomationDataService } from '../../services/data.service';
import { Subscription } from 'rxjs';
import { GoasosTitleService } from '../../../common/services/title.service';
import { MetaService } from '../../../common/services/meta.service';

@Component({
  selector: 'app-automation-space',
  templateUrl: './automation-space.component.html',
  styleUrl: './automation-space.component.scss'
})
export class AutomationSpaceComponent implements OnDestroy {
  private subs: Subscription[];

  public videos: VideoBox[] = [];

  constructor(service: AutomationDataService, title: GoasosTitleService, meta: MetaService) {
    this.subs = [];
    this.subs.push(service.Space$.subscribe(v => this.videos = v));

    title.UpdateTitle = 'Space Optimization';
    meta.Description = 'space automation products in bangalore, bhubabeshwar, cuttak, USA';
    meta.Keywords = 'space automation, space automation in bangalore, space automation in indiranagar, space automation in bengaluru, space automation in bhubaneshwar, space automation in cuttack, , space automation in usa';
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }
}
