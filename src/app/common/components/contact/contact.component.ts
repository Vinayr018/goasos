import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @Input({ required: true }) public h2!: string;

  public SelectChange(d: any): void {
    console.log(d);
  }
}
