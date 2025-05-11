import { Component, ElementRef, EventEmitter, forwardRef, Input, OnDestroy, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { CustomSelectOption } from '../../models';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),
    multi: true
  }]
})
export class SelectComponent implements OnInit, OnDestroy, ControlValueAccessor {

  @ViewChild('wrap') private div!: ElementRef<HTMLDivElement>;
  @ViewChild('options') private options!: ElementRef<HTMLUListElement>;

  private isMenuOpen: boolean = false;
  private clickEventCalled: boolean = false;
  private selectedItems: CustomSelectOption[] = [];
  private eventattached: () => void;
  private isDisabled: boolean = false;

  private onChange: any = () => { };
  private onTouch: any = () => { };

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
  writeValue(obj: any): void {
    this.selectedItems = Array.isArray(obj) ? obj : [];
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  ngOnInit(): void {
    this.eventattached = this.render.listen('body', 'click', (e: MouseEvent) => this.HandleClickEventOfBody(e));
  }

  ngOnDestroy(): void {
    this.eventattached();
  }

  public ToggleMenu(): void {
    if (this.isDisabled) {
      return;
    }
    this.onTouch();
    this.clickEventCalled = true;
    this.isMenuOpen = !this.isMenuOpen;

    this.adjustPositionOfOptions();
  }

  private adjustPositionOfOptions(): void {
    this.options.nativeElement.style.top = `${this.div.nativeElement.getBoundingClientRect().height}px`;
  }

  private HandleClickEventOfBody(event: MouseEvent): void {
    if (this.clickEventCalled) {
      this.clickEventCalled = false;
      return;
    }

    this.isMenuOpen = false;
  }

  public ItemClickEvent(val: CustomSelectOption, ev: MouseEvent): void {
    this.adjustPositionOfOptions();
    this.ChangeInit(ev);

    this.MultiSelect(val);

    this.NotifyChange();
  }

  private MultiSelect(val: CustomSelectOption) {
    let foundIndex = this.selectedItems.findIndex(i => i.key === val.key);
    if (foundIndex === -1) {
      this.selectedItems.push(val);
    } else {
      this.selectedItems.splice(foundIndex, 1);
    }
  }

  private NotifyChange() {
    this.change.emit(this.selectedItems);
    this.onChange(this.selectedItems);
  }

  private ChangeInit(ev: MouseEvent): void {
    ev.stopPropagation();
    this.onTouch();
  }

}
