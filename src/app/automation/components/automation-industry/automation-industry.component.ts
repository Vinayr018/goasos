import { Component, OnDestroy } from '@angular/core';
import { Box, Video } from '../../../common/models';
import { AutomationDataService } from '../../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-automation-industry',
  templateUrl: './automation-industry.component.html',
  styleUrl: './automation-industry.component.scss'
})
export class AutomationIndustryComponent implements OnDestroy {

  private subs: Subscription[];

  public videos: Video[] = [];
  public boxes: Box[] = [];

  constructor(private service: AutomationDataService) {
    this.subs = [];
    this.subs.push(service.IndustryVideos$.subscribe(v => this.videos = v));
    this.subs.push(service.Industry$.subscribe(b => this.boxes = b));
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }
}
