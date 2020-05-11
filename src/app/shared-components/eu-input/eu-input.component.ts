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

  inputType: string;
  showPassBtnText: string;
  nativeInputvalue: string;
  disabled: boolean;
  onChange: (value: string) => void = (value) => {};
  onTouch: (value: string) => void = (value) => {};

  constructor() {
    this.type = 'text';
    this.showPassBtnText = 'show';
  }

  set value(value: string) {
    if (value !== undefined && this.nativeInputvalue !== value) {
      this.nativeInputvalue = value;
      this.onChange(value);
      this.onTouch(value);
    }
  }

  get value() {
    return this.nativeInputvalue
  }

  //model -> view
  writeValue(value: string): void {
    this.value = value;
  }
  //view -> model
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: (value: string) => void): void {
    this.onTouch = fn;
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
}
