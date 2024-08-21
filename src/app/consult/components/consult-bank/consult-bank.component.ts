import { Component } from '@angular/core';
import { Box } from '../../../common/models';

@Component({
  selector: 'app-consult-bank',
  templateUrl: './consult-bank.component.html',
  styleUrl: './consult-bank.component.scss'
})
export class ConsultBankComponent {
  public boxes: Box[] = [
    { img: '/images/consulting/card.webp', alt: 'card', header: 'Cards and Payments', body: 'Whether it\'s a business opportunity or for regulatory compliance reasons, payments modernization is crucial for growth. We help you solidify  next-generation payments solutions across your customer segments, while maximizing your ROI.  We enable financial institutions with services ranging from payments strategy, differentiation, and monetization, to partnering with FinTechs.', id: 'one' },
    { img: '/images/consulting/lending.webp', alt: 'lending', header: 'Lending', body: 'We help you build a seamless lending experience for your customers, from onboarding to servicing, by creating agile and scalable digital operations. We ensure you\'ll get the most out of your data, with powerful insights that enable you to manage risk effectively and create tailored solutions for your customers.', id: 'two' },
    { img: '/images/consulting/retail.webp', alt: 'retail', header: 'Retail and commercial Banking', body: 'For your commercial customers, you\'ll create quicker, cost-effective and value-added solutions. For your retail customers, you\'ll drive hyper-personalized, humanized banking experiences. And for your bank? You\'ll maximize your potential, and achieve a greater return on investment', id: 'three' },
  ];
}
