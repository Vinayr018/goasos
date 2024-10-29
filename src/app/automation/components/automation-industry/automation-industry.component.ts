import { Component, OnDestroy } from '@angular/core';
import { Box, Video } from '../../../common/models';
import { AutomationDataService } from '../../services/data.service';
import { Subscription } from 'rxjs';
import { GoasosTitleService } from '../../../common/services/title.service';
import { MetaService } from '../../../common/services/meta.service';

@Component({
  selector: 'app-automation-industry',
  templateUrl: './automation-industry.component.html',
  styleUrl: './automation-industry.component.scss'
})
export class AutomationIndustryComponent implements OnDestroy {

  private subs: Subscription[];

  public videos: Video[] = [];
  public boxes: Box[] = [];

  constructor(service: AutomationDataService, title: GoasosTitleService, meta: MetaService) {
    this.subs = [];
    this.subs.push(service.IndustryVideos$.subscribe(v => this.videos = v));
    this.subs.push(service.Industry$.subscribe(b => this.boxes = b));

    title.UpdateTitle = 'Industry automation';
    meta.Description = 'industry automation products in bangalore, bhubabeshwar, cuttak, USA';
    meta.Keywords = 'industry automation, industry automation in bangalore, industry automation in indiranagar, industry automation in bengaluru, industry automation in bhubaneshwar, industry automation in cuttack, , industry automation in usa';
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }
}
