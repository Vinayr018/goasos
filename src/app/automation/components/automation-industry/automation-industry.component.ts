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
export class AutomationIndustryComponent {

  constructor(title: GoasosTitleService, meta: MetaService) {
    title.UpdateTitle = 'Industrial Automation Solutions Provider | Factory Automation Systems in Bangalore, Bhubaneswar & Cuttack';
    meta.Description = 'Transform your manufacturing with our advanced industrial automation solutions. From machine automation solutions to cloud-based solutions, we deliver customized systems that boost efficiency and reduce costs—available in Bangalore, Bhubaneswar & Cuttack.';
    meta.Keywords = 'industry automation, industry automation in bangalore, industry automation in indiranagar, industry automation in bengaluru, industry automation in bhubaneshwar, industry automation in cuttack, , industry automation in usa';
  }
}
