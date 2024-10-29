import { Component } from '@angular/core';
import { AutomationDataService } from '../../services/data.service';
import { Box } from '../../../common/models';
import { GoasosTitleService } from '../../../common/services/title.service';
import { MetaService } from '../../../common/services/meta.service';

@Component({
  selector: 'app-automation-security',
  templateUrl: './automation-security.component.html',
  styleUrl: './automation-security.component.scss'
})
export class AutomationSecurityComponent {

  public boxes: Box[];

  constructor(service: AutomationDataService, title: GoasosTitleService, meta: MetaService) {
    this.boxes = service.Security;

    title.UpdateTitle = 'Security automation';
    meta.Description = 'security automation products in bangalore, bhubabeshwar, cuttak, USA';
    meta.Keywords = 'security automation, security automation in bangalore, security automation in indiranagar, security automation in bengaluru, security automation in bhubaneshwar, security automation in cuttack, , security automation in usa';
  }
}
