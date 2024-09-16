import { Component } from '@angular/core';
import { Box, SlideBox } from '../../../common/models';
import { AutomationDataService } from '../../services/data.service';

@Component({
  selector: 'app-automation-office',
  templateUrl: './automation-office.component.html',
  styleUrl: './automation-office.component.scss'
})
export class AutomationOfficeComponent {

  public boxes: SlideBox[];

  constructor(private service: AutomationDataService) {
    // this.boxes = service.Office;
    this.boxes = service.Office;
  }
}
