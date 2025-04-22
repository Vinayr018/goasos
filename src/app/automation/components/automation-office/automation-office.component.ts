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

  constructor(title: GoasosTitleService, meta: MetaService) {
    title.UpdateTitle = 'Office Automation Solutions Provider | Smart Office Systems in Bangalore, Bhubaneswar & Cuttack';
    meta.Description = 'Boost your business productivity with our advanced office automation solutions. From smart lighting and access control to AI-powered systems—available in Bangalore, Bhubaneswar and Cuttack. Get a quote today!';
    meta.Keywords = 'office automation, office automation in bangalore, office automation in indiranagar, office automation in bengaluru, office automation in bhubaneshwar, office automation in cuttack, , office automation in usa';
  }
}
