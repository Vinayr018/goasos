import { AfterViewInit, Component, Input } from '@angular/core';
import { BaseLocationService } from '../../services/base-location.service';
import { Box } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-brochure',
  templateUrl: './video-brochure.component.html',
  styleUrl: './video-brochure.component.scss'
})
export class VideoBrochureComponent implements AfterViewInit {
  private focusedDiv: string | undefined;

  @Input({ required: true }) public title!: string;

  @Input({ required: true }) public boxes!: Box[];

  constructor(public base: BaseLocationService, private router: Router) {
    const st = router.getCurrentNavigation()?.extras?.state;
    console.log('bro0', st);
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
