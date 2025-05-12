import { Component, OnInit, Renderer2 } from '@angular/core';
import { CustomSelectOption } from '../../models';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.scss'
})
export class PhoneComponent implements OnInit {

  private india: CustomSelectOption = { key: 'IN', value: 'india.webp' }
  private us: CustomSelectOption = { key: 'US', value: 'usa.png' }
  private other: CustomSelectOption = { key: 'OTHER', value: 'other.png' }
  private eventattached: () => void;
  private clickEventCalled: boolean = false;

  public options: CustomSelectOption[] = [this.india, this.us, this.other];

  public selectedOption: CustomSelectOption = this.india;

  public isMenuOpen: boolean = false;

  constructor(private render: Renderer2) {
    this.eventattached = () => { };
  }

  ngOnInit(): void {
    this.eventattached = this.render.listen('body', 'click', (e: MouseEvent) => this.HandleClickEventOfBody(e));
  }

  private HandleClickEventOfBody(event: MouseEvent): void {
    if (this.clickEventCalled) {
      this.clickEventCalled = false;
      return;
    }

    this.isMenuOpen = false;
  }

  public ToggleDDL(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.clickEventCalled = true;
  }

  public ChangeValue(newValue: CustomSelectOption): void {
    this.selectedOption = newValue;
  }
}
