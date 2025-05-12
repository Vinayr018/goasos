import { Component } from '@angular/core';
import { CustomSelectOption } from '../../models';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.scss'
})
export class PhoneComponent {

  private india: CustomSelectOption = { key: 'IN', value: 'india.webp' }
  private us: CustomSelectOption = { key: 'US', value: 'usa.png' }
  private other: CustomSelectOption = { key: 'OTHER', value: 'other.png' }

  public options: CustomSelectOption[] = [this.india, this.us, this.other];

  public selectedOption: CustomSelectOption = this.india;


}
