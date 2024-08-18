import { AfterViewInit, Component, Input } from '@angular/core';
import { Box } from '../../models';
import { BaseLocationService } from '../../services/base-location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brochure',
  templateUrl: './brochure.component.html',
  styleUrl: './brochure.component.scss'
})
export class BrochureComponent implements AfterViewInit {

  private focusedDiv: string | undefined;

  @Input({ required: true }) public title!: string;

  @Input({ required: true }) public boxes!: Box[];

  constructor(public base: BaseLocationService, private router: Router) {
    const st = router.getCurrentNavigation()?.extras?.state;
    console.log('bro0',st);
    this.focusedDiv = st ? st['routeId'] : undefined;
  }

  ngAfterViewInit(): void {
    const foundDiv = document.querySelector(`#${this.focusedDiv}`) as HTMLDivElement | undefined;
    console.log('bro', this.focusedDiv);
    if (this.focusedDiv && foundDiv) {
      setTimeout(() => {
        foundDiv.scrollIntoView({ behavior: 'smooth' });
      }, 0.3 * (this.boxes.length - 1));
    }
  }

}
