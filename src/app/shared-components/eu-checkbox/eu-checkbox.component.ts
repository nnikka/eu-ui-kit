import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'eu-checkbox',
  templateUrl: './eu-checkbox.component.html',
  styleUrls: ['./eu-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EuCheckboxComponent),
      multi: true,
    },
  ],
})
export class EuCheckboxComponent implements OnInit, ControlValueAccessor {
  @Input() disabled: boolean;
  @Input() checked: boolean = false;
  @Input() label: string;
  @Input() error: string;

  private _value: boolean;
  private _onChange: (_: boolean) => void = (_) => {};
  private _onTouch: () => void = () => {};

  constructor() {}

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
      if(this.disabled) value = !this.disabled;
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
