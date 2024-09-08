import { Component } from '@angular/core';
import { Box } from '../../../common/models';
import { AutomationDataService } from '../../services/data.service';

@Component({
  selector: 'app-automation-space',
  templateUrl: './automation-space.component.html',
  styleUrl: './automation-space.component.scss'
})
export class AutomationSpaceComponent {
  constructor(public service: AutomationDataService){}
}
