import { Component } from '@angular/core';
import { GoasosTitleService } from '../../../common/services/title.service';
import { MetaService } from '../../../common/services/meta.service';

@Component({
  selector: 'app-consult-bank',
  templateUrl: './consult-bank.component.html',
  styleUrl: './consult-bank.component.scss'
})
export class ConsultBankComponent {
  constructor(title: GoasosTitleService, meta: MetaService) {
      title.UpdateTitle = 'Software Consulting Services | Banking, Capital Markets & AI Services - Bangalore, Bhubaneswar & Cuttack';
      meta.Description = 'Elevate your business with our expert software consulting services in Bangalore, Bhubaneswar, and Cuttack. Specialized in Banking & Financial Services, Capital Markets Solutions, and Data & AI Services.';
      meta.Keywords = 'energy automation, energy automation in bangalore, energy automation in indiranagar, energy automation in bengaluru, energy automation in bhubaneshwar, energy automation in cuttack, energy automation in usa';
    }
}
