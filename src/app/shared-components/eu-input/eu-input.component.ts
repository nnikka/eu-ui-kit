import { Component, OnInit, Input, Self, Optional } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import {
  EEuInputTypeType,
  EEuInputType,
  EEuInputPasswordStrengthType,
  EEuInputPasswordStrength,
} from './eu-input.schematics';

@Component({
  selector: 'eu-input',
  templateUrl: './eu-input.component.html',
  styleUrls: ['./eu-input.component.scss'],
})
export class EuInputComponent implements OnInit, ControlValueAccessor {
  @Input() iconClass: string;
  @Input() label: string;
  @Input() type: EEuInputTypeType = EEuInputType.text;
  @Input() passStrength: EEuInputPasswordStrengthType =
    EEuInputPasswordStrength.none;
  @Input() disabled: boolean;
  @Input() errorMessages: any = {};

  inputType: string;
  passVisibilityBtnText: string = 'show';

  private _value: string;
  private _onChange: (_: any) => void = (_) => {};
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
    return this.invalid ? touched : false;
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

  get inptClass() {
    let iconClass = this.iconClass ? 'eu-inpt-icon-input' : '';
    let errorClass = this.showError ? 'eu-inpt-error-input' : '';
    let passwordClass =
      this.type === 'password' ? 'eu-inpt-password-input' : '';
    let inputOpenedClass = this.value ? 'eu-inpt-opened' : '';
    return `${iconClass} ${errorClass} ${passwordClass} ${inputOpenedClass}`;
  }

  get passStrengthClass() {
    return `eu-inpt-password-strength-${this.passStrength}`;
  }

  get usePassStrength() {
    return this.passStrength !== 'none' && this.passStrength;
  }

  get passVisibilityIcon() {
    return this.passVisibilityBtnText === 'show'
      ? 'eu-icon-eye-closed'
      : 'eu-icon-eye-opened';
  }

  set value(value: string) {
    if (value !== undefined && this._value !== value) {
      this._value = value;
      this._onChange(value);
    }
  }

  get value() {
    return this._value;
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
