import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-areas',
  templateUrl: './service-areas.component.html',
  styleUrl: './service-areas.component.scss'
})
export class ServiceAreasComponent {
  @Input() public footer: string = '';
  @Input({ required: true }) public header!: string;
  @Input({ required: true }) public bangalore!: string;
  @Input({ required: true }) public bhubaneshwar!: string;
  @Input({ required: true }) public cuttack!: string;
  
}
