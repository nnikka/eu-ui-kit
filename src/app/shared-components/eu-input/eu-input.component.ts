import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
  @Input() icon: string;
  @Input() error: string;
  @Input() type: string;
  @Input() label: string;

  inputType: string;
  showPassBtnText: string;
  disabled: boolean;
  
  private _value: string;
  private _onChange: (_: any) => void = (_) => {};
  private _onTouch: () => void = () => {};

  constructor() {
    this.type = 'text';
    this.showPassBtnText = 'show';
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

  ngOnInit(): void {
    this.inputType = this.type;
  }

  togglePass() {
    this.inputType = this.inputType === 'text' ? 'password' : 'text';
    this.showPassBtnText = this.inputType === 'text' ? 'hide' : 'show';
  }

  onBlur() {
    this._onTouch();
  }
}
