import { Component } from '@angular/core';
import { AutomationDataService } from '../../services/data.service';
import { Box } from '../../../common/models';

@Component({
  selector: 'app-automation-home',
  templateUrl: './automation-home.component.html',
  styleUrl: './automation-home.component.scss'
})
export class AutomationHomeComponent {

  public boxes: Box[];

  constructor(private service: AutomationDataService) {
    this.boxes = service.Home;
  }
}
