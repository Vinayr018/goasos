import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent implements OnInit, OnDestroy {
  private isMenuOpen: boolean = false;
  private clickEventCalled: boolean = false;

  private eventattached: () => void;

  constructor(private render: Renderer2) {
    this.eventattached = () => { };
  }

  ngOnInit(): void {
    this.eventattached = this.render.listen('body', 'click', (e: MouseEvent) => this.HandleClickEventOfBody(e));
  }


  ngOnDestroy(): void {
    this.eventattached();
  }

  public get IsMenuActive(): boolean {
    return this.isMenuOpen;
  }

  public ToggleMenu(): void {
    this.clickEventCalled = true;
    this.isMenuOpen = !this.isMenuOpen;
  }

  private HandleClickEventOfBody(event: MouseEvent): void {
    if (this.clickEventCalled) {
      this.clickEventCalled = false;
      return;
    }

    this.isMenuOpen = false;
  }



}
