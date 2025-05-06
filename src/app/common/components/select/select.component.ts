import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2 } from '@angular/core';
import { CustomSelectOption } from '../../models';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent implements OnInit, OnDestroy {
  private isMenuOpen: boolean = false;
  private clickEventCalled: boolean = false;
  private selectedItems: CustomSelectOption[] = [];
  private eventattached: () => void;

  public get IsMenuActive(): boolean {
    return this.isMenuOpen;
  }

  public get SelectedItemList(): string[] {
    return this.selectedItems.map(kvp => kvp.value);
  }

  @Output() public change: EventEmitter<CustomSelectOption[]>;
  @Input({ required: true }) public items!: CustomSelectOption[];

  constructor(private render: Renderer2) {
    this.change = new EventEmitter<CustomSelectOption[]>();
    this.eventattached = () => { };
  }

  ngOnInit(): void {
    this.eventattached = this.render.listen('body', 'click', (e: MouseEvent) => this.HandleClickEventOfBody(e));
  }

  ngOnDestroy(): void {
    this.eventattached();
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

  public ItemClickEvent(val: CustomSelectOption, ev: MouseEvent): void {
    ev.stopPropagation();
    let foundIndex = this.selectedItems.findIndex(i => i === val);
    if (foundIndex === -1) {
      this.selectedItems.push(val);
    } else {
      this.selectedItems.splice(foundIndex, 1);
    }
    this.change.emit(this.selectedItems);
  }

}
