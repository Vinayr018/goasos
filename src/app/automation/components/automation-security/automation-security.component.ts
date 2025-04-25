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

  constructor(title: GoasosTitleService, meta: MetaService) {
    title.UpdateTitle = 'Centralized Video Surveillance Systems | CCTV Installation Services in Bangalore, Bhubaneswar & Cuttack';
    meta.Description = 'Secure your spaces with solar-powered CCTV camera systems and centralized video surveillance. Expert installation across Bangalore, Bhubaneswar and Cuttack. Trusted security for homes, offices & industries. Contact us today!';
    meta.Keywords = 'security automation, security automation in bangalore, security automation in indiranagar, security automation in bengaluru, security automation in bhubaneshwar, security automation in cuttack, , security automation in usa';
  }
}
