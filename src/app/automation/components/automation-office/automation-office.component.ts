import { AfterViewInit, Component } from '@angular/core';
import { Box, Interest, SlideBox } from '../../../common/models';
import { AutomationDataService } from '../../services/data.service';
import { GoasosTitleService } from '../../../common/services/title.service';
import { MetaService } from '../../../common/services/meta.service';
import { AnalyticsService } from '../../../common/services/analytics.service';
import { ContactLocationService } from '../../../common/services/contact-location.service';

@Component({
  selector: 'app-automation-office',
  templateUrl: './automation-office.component.html',
  styleUrl: './automation-office.component.scss'
})
export class AutomationOfficeComponent implements AfterViewInit {

  public others: Interest[] = [
    { h3: 'Security Cameras & Centralized Surveillance:', p: 'Protect your assets and ensure security with advanced video surveillance systems designed for residential, commercial and industrial environments', cta: 'Upgrade Your Security', link: 'cctv-video-surveillance-security-cameras' },
    { h3: 'Solar Energy Solutions:', p: 'Optimize energy consumption with renewable solutions for homes and businesses.', cta: 'Go Green', link: 'solar-energy-solutions' },
    { h3: 'Software Consulting Services', p: 'Specialized in Banking & Financial Services, Capital Markets & Wealth Management Solutions, and Data & AI Services.', cta: 'Unlock Data-Driven Growth', link: 'software-consulting-services' },
  ];

  constructor(title: GoasosTitleService,
    meta: MetaService,
    public analytics: AnalyticsService,
    public cont: ContactLocationService) {
    title.UpdateTitle = 'Office Automation Solutions Provider | Smart Office Systems in Bangalore, Bhubaneswar & Cuttack';
    meta.Description = 'Boost your business productivity with our advanced office automation solutions. From smart lighting and access control to AI-powered systems—available in Bangalore, Bhubaneswar and Cuttack. Get a quote today!';
    meta.Keywords = 'office automation, office automation in bangalore, office automation in indiranagar, office automation in bengaluru, office automation in bhubaneshwar, office automation in cuttack, , office automation in usa';
  }

  charts = [
    { label: '40% reduction in time spent on administrative tasks', value: 40, color: '#4CAF50', id: 'canvas1' },
    { label: '35% decrease in operational costs', value: 35, color: '#2196F3', id: 'canvas2' },
    { label: '60% improvement in document processing accuracy', value: 60, color: '#FF9800', id: 'canvas3' },
    { label: '50% increase in employee satisfaction', value: 50, color: '#9C27B0', id: 'canvas4' }
  ];

  ngAfterViewInit(): void {
    this.charts.forEach(chart => {
      this.drawPieChart(chart.id, chart.value, chart.color);
    });
  }

  drawPieChart(canvasId: string, percentage: number, color: string) {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = canvas.width;
    const centerX = size / 2;
    const centerY = size / 1.1; // shift down
    const radius = centerX - 17;
    const lineWidth = 35;
    let current = 0;
    const duration = 1000;
    const stepTime = 10;
    const steps = duration / stepTime;
    const increment = percentage / steps;

    const animate = () => {
      ctx.clearRect(0, 0, size, size);

      // Background arc (track)
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, Math.PI, 0);
      ctx.strokeStyle = '#E0E0E0';
      ctx.lineWidth = lineWidth;
      ctx.lineCap = 'butt';
      ctx.stroke();



      const endAngle = Math.PI + (current / 100) * Math.PI;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, Math.PI, endAngle);
      ctx.strokeStyle = color;;
      ctx.lineWidth = lineWidth;
      ctx.stroke();

      // Center text
      ctx.fillStyle = '#000';
      ctx.font = '16px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${Math.round(current)}%`, centerX, centerY - radius / 2);

      if (current < percentage) {
        current += increment;
        requestAnimationFrame(animate);
      }
    };

    animate();
  }

  public CaptureClicks(cta: string): void {
    this.analytics.HomeCtaEvent(cta);
  }
}
