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
    title.UpdateTitle = 'Energy automation';
    meta.Description = 'Energy automation products in bangalore, bhubabeshwar, cuttak, USA';
    meta.Keywords = 'energy automation, energy automation in bangalore, energy automation in indiranagar, energy automation in bengaluru, energy automation in bhubaneshwar, energy automation in cuttack, energy automation in usa';
  }
}
