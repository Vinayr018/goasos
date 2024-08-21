import { Component } from '@angular/core';
import { Box } from '../../../common/models';

@Component({
  selector: 'app-consult-market',
  templateUrl: './consult-market.component.html',
  styleUrl: './consult-market.component.scss'
})
export class ConsultMarketComponent {
  public boxes: Box[] = [
    { img: '/images/consulting/investment.webp', alt: 'investment', header: 'Capital Markets', body: 'In the dynamic landscape of capital markets, navigating multiple strategic objectives - enhancing services, managing risks, reducing costs, and adapting to regulatory changes - demands advanced solutions that keep pace with business and technological shifts. We bring extensive capital markets expertise, global delivery capability, deep industry networks and technology innovation to help prepare your firm for the future.', id: 'one' },
    { img: '/images/consulting/wealth.webp', alt: 'wealth', header: 'Wealth Managment', body: 'New customer expectations around technology and easy access to data, and ever-higher demands for a seamless and simplified customer experience are raising the bar high for wealth management firms. How can wealth managers best achieve long-term growth? Goasos has identified five strategic focus areas, highlighted below, where we can help wealth management clients transform to a more efficient, sustainable, and digital business mode.', id: 'two' },
  ];
}
