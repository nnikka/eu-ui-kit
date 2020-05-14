import { Component, OnInit, Input, forwardRef, Self, Optional } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

@Component({
  selector: 'eu-textarea',
  templateUrl: './eu-textarea.component.html',
  styleUrls: ['./eu-textarea.component.scss'],
})
export class EuTextareaComponent implements OnInit, ControlValueAccessor {
  @Input() label: string;
  @Input() disabled: boolean;
  @Input() minlength: number;
  @Input() required: boolean;

  private _value: string;
  private _onChange: (_: any) => void = (_) => {};
  private _onTouch: () => void = () => {};
  errorMessages: Map<string, () => string> = new Map();

  constructor(@Self() @Optional() public control: NgControl) {
    this.control && (this.control.valueAccessor = this);
    console.log(this.control)
    this.errorMessages.set('required', () => `${this.label} is required.`);
    this.errorMessages.set(
      'minlength',
      () => `The number of characters should not be less than ${this.minlength}.`
    );
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
      this.errorMessages.has(key)
        ? this.errorMessages.get(key)()
        : <string>errors[key] || key
    );
  }

  get txtareaClass() {
    let errorClass = this.showError ? 'eu-txtarea-error-txtarea' : '';
    let txtAreaOpenedClass = this.value? 'eu-txtarea-opened' : '';
    return `${errorClass} ${txtAreaOpenedClass}`
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
  }

  onBlur() {
    this._onTouch();
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
