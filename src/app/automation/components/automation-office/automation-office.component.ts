import { AfterViewInit, Component } from '@angular/core';
import { Box, SlideBox } from '../../../common/models';
import { AutomationDataService } from '../../services/data.service';
import { GoasosTitleService } from '../../../common/services/title.service';
import { MetaService } from '../../../common/services/meta.service';

@Component({
  selector: 'app-automation-office',
  templateUrl: './automation-office.component.html',
  styleUrl: './automation-office.component.scss'
})
export class AutomationOfficeComponent implements AfterViewInit {

  constructor(title: GoasosTitleService, meta: MetaService) {
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
    const center = size / 2;
    const radius = center - 15;
    const lineWidth = 30;
    let current = 0;
    const duration = 1000;
    const stepTime = 10;
    const steps = duration / stepTime;
    const increment = percentage / steps;

    const animate = () => {
      ctx.clearRect(0, 0, size, size);

      // Draw background arc (full ring)
      ctx.beginPath();
      ctx.arc(center, center, radius, 0, 2 * Math.PI);
      ctx.strokeStyle = '#f0f0f0';
      ctx.lineWidth = lineWidth;
      ctx.lineCap = 'butt';
      ctx.stroke();

      // Foreground arc (progress)
      const endAngle = (current / 100) * 2 * Math.PI;
      ctx.beginPath();
      ctx.arc(center, center, radius, -0.5 * Math.PI, endAngle - 0.5 * Math.PI);
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      ctx.lineCap = 'round'; // <-- rounded ends
      ctx.stroke();

      // Text
      ctx.fillStyle = '#000';
      ctx.font = '16px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${Math.round(current)}%`, center, center);

      if (current < percentage) {
        current += increment;
        requestAnimationFrame(animate);
      }
    };

    animate();
  }
}
