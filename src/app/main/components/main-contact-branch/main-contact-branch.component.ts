import { Component } from '@angular/core';
import { AnalyticsService } from '../../../common/services/analytics.service';

@Component({
  selector: 'app-main-contact-branch',
  templateUrl: './main-contact-branch.component.html',
  styleUrl: './main-contact-branch.component.scss'
})
export class MainContactBranchComponent {
  constructor(public analytics: AnalyticsService) { }
}
