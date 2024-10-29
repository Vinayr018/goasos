import { Component } from '@angular/core';
import { AutomationDataService } from '../../services/data.service';
import { Box, VideoBox } from '../../../common/models';
import { GoasosTitleService } from '../../../common/services/title.service';
import { MetaService } from '../../../common/services/meta.service';

@Component({
  selector: 'app-automation-home',
  templateUrl: './automation-home.component.html',
  styleUrl: './automation-home.component.scss'
})
export class AutomationHomeComponent {

  public boxes: VideoBox[];

  constructor(service: AutomationDataService, title: GoasosTitleService, meta: MetaService) {
    this.boxes = service.Home;
    title.UpdateTitle = 'Home automation';
    meta.Description = 'home automation products in bangalore, bhubabeshwar, cuttak, USA';
    meta.Keywords = 'home automation, home automation in bangalore, home automation in indiranagar, home automation in bengaluru, home automation in bhubaneshwar, home automation in cuttack, , home automation in usa';
  }
}
