import { Component, EventEmitter, forwardRef, OnDestroy, OnInit, Output, Renderer2 } from '@angular/core';
import { CustomSelectOption } from '../../models';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.scss',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PhoneComponent),
    multi: true
  }]
})
export class PhoneComponent implements OnInit, OnDestroy, ControlValueAccessor {

  private india: CustomSelectOption = { key: 'IN', value: 'india.webp' }
  private us: CustomSelectOption = { key: 'US', value: 'usa.png' }
  private other: CustomSelectOption = { key: 'OTHER', value: 'other.png' }
  private eventattached: () => void;
  private clickEventCalled: boolean = false;
  public onchange: any = () => { };
  private ontouch: any = () => { };
  private isDisabled = false;

  public options: CustomSelectOption[] = [this.india, this.us, this.other];

  public selectedOption: CustomSelectOption = this.india;

  public isMenuOpen: boolean = false;


  @Output() public codechange: EventEmitter<CustomSelectOption>;

  constructor(private render: Renderer2) {
    this.eventattached = () => { };
    this.codechange = new EventEmitter<CustomSelectOption>();
  }
  writeValue(obj: any): void {
    this.selectedOption = !!obj ? obj : this.india;
  }
  registerOnChange(fn: any): void {
    this.onchange = fn;
  }
  registerOnTouched(fn: any): void {
    this.ontouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
  ngOnDestroy(): void {
    this.eventattached();
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

    if (this.isDisabled) {
      return;
    }

    this.ontouch();
    this.isMenuOpen = !this.isMenuOpen;
    this.clickEventCalled = true;
  }

  public ChangeValue(newValue: CustomSelectOption): void {
    this.selectedOption = newValue;
    this.codechange.emit(newValue);
  }

  public Val(event: KeyboardEvent): void {
    this.onchange((event.target as HTMLInputElement).value);
  }
}
