import { Component } from '@angular/core';
import { NavigationBehaviorOptions, Router } from '@angular/router';
import { BaseLocationService } from '../../../common/services/base-location.service';

@Component({
  selector: 'app-consult-products',
  templateUrl: './consult-products.component.html',
  styleUrl: './consult-products.component.scss'
})
export class ConsultProductsComponent {

  public bankProducts: any[] = [
    { title: 'Cards and Payments', img: 'images/consulting/card.webp', alt: 'cards', desc: 'We enable financial institutions with services ranging from payments strategy, differentiation, and monetization, to partnering with FinTech.', targetRoute: '/consulting', param: 'one' },
    { title: 'Lending', img: 'images/consulting/lending.webp', alt: 'lending', desc: 'We help you build a seamless lending experience for your customers.', targetRoute: '/consulting', param: 'two' },
    { title: 'Retail and commercial Banking', img: 'images/consulting/retail.webp', alt: 'retail', desc: 'For your commercial customers, you\'ll create quicker, cost-effective and value-added solutions.', targetRoute: '/consulting', param: 'three' },
  ];

  public marketProducts: any[] = [
    { title: 'Capital markets', img: 'images/consulting/investment.webp', alt: 'investment', desc: 'We bring extensive capital markets expertise, global delivery capability, deep industry networks and technology innovation to help prepare your firm for the future.', targetRoute: '/consulting/market', param: 'one' },
    { title: 'Wealth Managment', img: 'images/consulting/wealth.webp', alt: 'wealth', desc: 'we have identified five strategic focus areas, highlighted below, where we can help wealth management clients transform to a more efficient, sustainable, and digital business mode.', targetRoute: '/consulting/market', param: 'two' },
  ];

  public aiProducts: any[] = [
    { title: 'Accelerate your industry', img: 'images/consulting/accelerate-ai.webp', alt: 'accelerate', desc: 'We help organizations respond to the uncertainty of today\'s rapidly changing landscape with confidence, developing and deploying trusted data-powered solutions and AI at speed and at scale.', targetRoute: '/consulting/data', param: 'one' },
    { title: 'Generative AI', img: 'images/consulting/genai.webp', alt: 'genai', desc: 'While these large models are undoubtedly powerful, it is essential to implement safeguards before fully integrating them into your business operations.', targetRoute: '/consulting/data', param: 'two' },
    { title: 'sustainability', img: 'images/consulting/sustainai.webp', alt: 'sustain', desc: ' We support the execution of your data driven sustainability strategy identifying the most valuable data use cases in your business value chain and implementing the prioritized actions.', targetRoute: '/consulting/data', param: 'three' },
  ];

  constructor(public path: BaseLocationService, private router: Router) { }

  public Navigate(route: string, param: string): void {
    const ex: NavigationBehaviorOptions = { state: { routeId: param } };
    console.log(ex.state, 'state');
    this.router.navigate([route], { state: { routeId: param } });
  }
}
