import { Component } from '@angular/core';
import { IdentifierService } from './common/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [IdentifierService]
})
export class AppComponent {
  title = 'goasos';
  constructor(private ser: IdentifierService) { }
}
