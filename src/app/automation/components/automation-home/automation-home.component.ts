import { Component } from '@angular/core';
import { AutomationDataService } from '../../services/data.service';

@Component({
  selector: 'app-automation-home',
  templateUrl: './automation-home.component.html',
  styleUrl: './automation-home.component.scss'
})
export class AutomationHomeComponent {
  constructor(public service: AutomationDataService) { }
}
