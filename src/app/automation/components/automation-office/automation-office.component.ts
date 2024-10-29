import { Component } from '@angular/core';
import { Box, SlideBox } from '../../../common/models';
import { AutomationDataService } from '../../services/data.service';
import { GoasosTitleService } from '../../../common/services/title.service';
import { MetaService } from '../../../common/services/meta.service';

@Component({
  selector: 'app-automation-office',
  templateUrl: './automation-office.component.html',
  styleUrl: './automation-office.component.scss'
})
export class AutomationOfficeComponent {

  public boxes: SlideBox[];

  constructor(service: AutomationDataService, title: GoasosTitleService, meta: MetaService) {
    this.boxes = service.Office;
    title.UpdateTitle = 'Office automation';
    meta.Description = 'office automation products in bangalore, bhubabeshwar, cuttak, USA';
    meta.Keywords = 'office automation, office automation in bangalore, office automation in indiranagar, office automation in bengaluru, office automation in bhubaneshwar, office automation in cuttack, , office automation in usa';
  }
}
