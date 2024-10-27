import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrl: './main-product.component.scss'
})
export class MainProductComponent {

  constructor(private meta: Meta, private title: Title) {
    title.setTitle('Products : Goasos');
    meta.updateTag({ name: 'description', content: 'home automation, office building automation and software solutions in indira nagar bangalore, bhubaneswar, cuttack and USA' });
    meta.updateTag({ name: 'keywords', content: 'indiranagar bangalore, Home Automation, Light automation, Gate Automation, Curtain Automation, Shutter Automation, celling automation, Industrial Automation, Factory automation, Security automation,occupancy sensors, Office Automation, Access control system, Biometrics System, Solar energy, Solar Pannels, Software consultancy, software staffing, Software development, AI and ML technology.' });
    meta.updateTag({ name: 'google-site-verification', content: 'x1LRun8LpOJmy7W1n7G_q5FCpc-bS7kSywynGnMMbss' });//TODO put this in DNS nme server with TXT record
  }

}
