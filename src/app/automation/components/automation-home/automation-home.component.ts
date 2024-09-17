import { Component } from '@angular/core';
import { AutomationDataService } from '../../services/data.service';
import { Box, VideoBox } from '../../../common/models';

@Component({
  selector: 'app-automation-home',
  templateUrl: './automation-home.component.html',
  styleUrl: './automation-home.component.scss'
})
export class AutomationHomeComponent {

  public boxes: VideoBox[];

  constructor(private service: AutomationDataService) {
    this.boxes = service.Home;
  }
}
