import { Component } from '@angular/core';
import { Box } from '../../../common/models';

@Component({
  selector: 'app-consult-data-ai',
  templateUrl: './consult-data-ai.component.html',
  styleUrl: './consult-data-ai.component.scss'
})
export class ConsultDataAiComponent {
  public boxes: Box[] = [
    { img: '/images/consulting/accelerate-ai.webp', alt: 'accelerate', header: 'Accelerate your industry', body: 'We help organizations respond to the uncertainty of today\'s rapidly changing landscape with confidence, developing and deploying trusted data-powered solutions and AI at speed and at scale. Our cross-functional team of data engineers, industry experts, and business transformation specialists help clients activate data at the core of the organization, redefining systems, processes, and the culture itself, to embrace an ever-evolving future.', id: 'one' },
    { img: '/images/consulting/genai.webp', alt: 'genAI', header: 'Generative AI', body: 'global survey says generative AI will significantly disrupt their industries. Gen AI is already fueling digital transformation in many sectors, leading to performance improvement as well as next-generation customer engagement and personalized experiences. While these large models are undoubtedly powerful, it is essential to implement safeguards before fully integrating them into your business operations.', id: 'two' },
    { img: '/images/consulting/sustainai.webp', alt: 'sustain', header: 'Data and AI for sustainability', body: 'Data-driven insights inform sustainability decision-makers across their organization business domains. We support the execution of your data driven sustainability strategy identifying the most valuable data use cases in your business value chain and implementing the prioritized actions fostering collaboration between Sustainability teams and Data & AI teams', id: 'three' },
  ];
}
