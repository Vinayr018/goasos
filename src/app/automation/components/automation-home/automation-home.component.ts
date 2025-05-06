import { Component } from '@angular/core';
import { GoasosTitleService } from '../../../common/services/title.service';
import { MetaService } from '../../../common/services/meta.service';
import { ContactLocationService } from '../../../common/services/contact-location.service';

@Component({
  selector: 'app-automation-home',
  templateUrl: './automation-home.component.html',
  styleUrl: './automation-home.component.scss'
})
export class AutomationHomeComponent {

  constructor(title: GoasosTitleService,
    meta: MetaService,
    public cont: ContactLocationService) {
    title.UpdateTitle = 'Smart Home Automation Solutions | Best Home Automation Company in Bangalore, Bhubaneswar & Cuttack | GOAS';
    meta.Description = 'Looking for smart home automation solutions? We offer smart lighting, security systems, voice-controlled devices, and AI-powered smart home setups in Bangalore, Bhubaneswar & Cuttack. Upgrade your home today!';
  }
}
