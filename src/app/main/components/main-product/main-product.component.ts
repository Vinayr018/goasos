import { Component } from '@angular/core';
import { MetaService } from '../../../common/services/meta.service';
import { GoasosTitleService } from '../../../common/services/title.service';

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrl: './main-product.component.scss'
})
export class MainProductComponent {

  constructor(metaS: MetaService, titleG: GoasosTitleService) {
    titleG.UpdateTitle = 'Products';
    metaS.Description = 'home automation, office building automation and software solutions in indira nagar bangalore, bhubaneswar, cuttack and USA';
    metaS.Keywords = 'indiranagar bangalore, Home Automation, Light automation, Gate Automation, Curtain Automation, Shutter Automation, celling automation, Industrial Automation, Factory automation, Security automation,occupancy sensors, Office Automation, Access control system, Biometrics System, Solar energy, Solar Pannels, Software consultancy, software staffing, Software development, AI and ML technology.';
  }

}
