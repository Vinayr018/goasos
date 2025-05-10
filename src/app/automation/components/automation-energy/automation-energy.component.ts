import { Component } from '@angular/core';
import { GoasosTitleService } from '../../../common/services/title.service';
import { MetaService } from '../../../common/services/meta.service';

@Component({
  selector: 'app-automation-energy',
  templateUrl: './automation-energy.component.html',
  styleUrl: './automation-energy.component.scss'
})
export class AutomationEnergyComponent {
  constructor(title: GoasosTitleService, meta: MetaService) {
    title.UpdateTitle = 'Solar Panel Installation in Bangalore, Bhubaneswar & Cuttack | Rooftop Solar Solutions';
    meta.Description = 'Harness the power of solar and smart energy automation with GOAS. We offer end-to-end solar panel installation and smart energy management systems for homes, offices, and industrial sites in Bangalore, Bhubaneswar and Cuttack. Save energy, reduce costs, and go green today!';
    meta.Keywords = 'energy automation, energy automation in bangalore, energy automation in indiranagar, energy automation in bengaluru, energy automation in bhubaneshwar, energy automation in cuttack, energy automation in usa';
  }
}
