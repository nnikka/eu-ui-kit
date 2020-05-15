import { Component, OnInit, Input, Self, Optional } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'eu-checkbox',
  templateUrl: './eu-checkbox.component.html',
  styleUrls: ['./eu-checkbox.component.scss']
})
export class EuCheckboxComponent implements OnInit, ControlValueAccessor {
  @Input() disabled: boolean;
  @Input() checked: boolean = false;
  @Input() label: string;
  @Input() errorMessages: any = {};

  private _value: boolean;
  private _onChange: (_: boolean) => void = (_) => {};
  private _onTouch: () => void = () => {};

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
    return this.invalid ? touched || dirty : false;
  }

  get errors(): Array<string> {
    if (!this.control) {
      return [];
    }
    const { errors } = this.control;
    return Object.keys(errors).map((key) =>
      this.errorMessages[key] ? this.errorMessages[key] : ''
    );
  }

  get checkboxClass() {
    let disabledClass = this.disabled ? 'eu-checkbox-disabled' : '';
    return disabledClass;
  }

  ngOnInit(): void {
  }

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
