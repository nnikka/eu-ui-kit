import { Component, OnInit, Input, forwardRef, ViewChild, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { EEuInputTypeType, EEuInputType, EEuInputPasswordStrengthType, EEuInputPasswordStrength } from './eu-input.schematics';

@Component({
  selector: 'eu-input',
  templateUrl: './eu-input.component.html',
  styleUrls: ['./eu-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EuInputComponent),
      multi: true,
    },
  ],
})
export class EuInputComponent implements OnInit, ControlValueAccessor {
  @Input() iconClass: string;
  @Input() error: string;
  @Input() label: string;
  @Input() type: EEuInputTypeType = EEuInputType.text;
  @Input() passStrength: EEuInputPasswordStrengthType = EEuInputPasswordStrength.default;
  @Input() disabled: boolean;

  inputType: string;
  passVisibilityBtnText: string  = 'show';
  
  private _value: string;
  private _onChange: (_: any) => void = (_) => {};
  private _onTouch: () => void = () => {};

  constructor() {
  }

  get inptClass() {
    const iconClass = this.iconClass ? 'eu-inpt-icon-input' : '';
    const errorClass = this.error ? 'eu-inpt-error-input' : '';
    const passwordClass = this.type === 'password' ? 'eu-inpt-password-input' : '';
    return `${iconClass} ${errorClass} ${passwordClass}`
  }

  get passStrengthClass() {
    return `eu-inpt-password-strength-${this.passStrength}`
  }

  get passVisibilityIcon() {
    return this.passVisibilityBtnText === 'show' ? 'eu-icon-eye-closed' : 'eu-icon-eye-opened';
  }

  set value(value: string) {
    if (value !== undefined && this._value !== value) {
      this._value = value;
      this._onChange(value);
    }
  }

  get value() {
    return this._value
  }

  
  ngOnInit(): void {
    this.inputType = this.type;
  }

  onBlur() {
    this._onTouch();
  }

  togglePassVisibility() {
    this.inputType = this.inputType === 'text' ? 'password' : 'text';
    this.passVisibilityBtnText = this.inputType === 'text' ? 'hide' : 'show';
  }

  //model -> view
  writeValue(value: string): void {
    this.value = value;
  }

  //view -> model
  registerOnChange(fn: (_: any) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this._onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
