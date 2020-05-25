import { Component, OnInit, Input, Self, Optional, ChangeDetectionStrategy } from '@angular/core';
import { NgControl, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'eb-toggle',
  templateUrl: './eb-toggle.component.html',
  styleUrls: ['./eb-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EbToggleComponent implements OnInit, ControlValueAccessor {
  @Input() disabled: boolean;
  @Input() label: string;
  @Input() errorMessages: any = {};
  @Input() minHeight: "auto" | number = 45;

  checked: boolean = false;

  private _value: boolean;
  private _onChange: (_: boolean) => void = (_) => { };
  private _onTouch: () => void = () => { };

  constructor(@Self() @Optional() public control: NgControl) {
    this.control && (this.control.valueAccessor = this);
  }

  get invalid(): boolean {
    return this.control ? this.control.invalid : false;
  }

  get showError(): boolean {
    if (!this.control) {
      return false;
    }
    const { dirty, touched } = this.control;
    return this.invalid ? touched : false;
  }

  get errors(): Array<string> {
    if (!this.control) {
      return [];
    }
    const { errors } = this.control;
    if (errors) {
      return Object.keys(errors).map((key) =>
        this.errorMessages[key] ? this.errorMessages[key] : ''
      );
    } else {
      return [];
    }
  }

  get toggleStyle(): object {
    let styleObj = {};
    if (this.minHeight !== "auto") {
      styleObj['min-height'] = this.minHeight + "px";
    }
    return styleObj;
  }

  get toggleClass() {
    let disabledClass = this.disabled ? 'eb-toggle-disabled' : '';
    return disabledClass;
  }

  ngOnInit(): void { }

  onBlur() {
    this._onTouch();
  }

  set value(value: boolean) {
    if (value !== undefined && this._value !== value) {
      this._value = value;
      this.checked = value;
      this._onChange(value);
    }
  }

  get value() {
    return this._value;
  }

  onInputChange(event) {
    const newValue: boolean = event.target.checked;
    if (newValue !== this._value) {
      this._value = newValue;
      this._onChange(newValue);
    }
  }

  //model -> view
  writeValue(value: boolean): void {
    this.value = value;
  }

  //view -> model
  registerOnChange(fn: (_: boolean) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this._onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
