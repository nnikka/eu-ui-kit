import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'eu-textarea',
  templateUrl: './eu-textarea.component.html',
  styleUrls: ['./eu-textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EuTextareaComponent),
      multi: true,
    },
  ],
})
export class EuTextareaComponent implements OnInit, ControlValueAccessor {
  @Input() error: string;
  @Input() label: string;
  @Input() disabled: boolean;

  private _value: string;
  private _onChange: (_: any) => void = (_) => {};
  private _onTouch: () => void = () => {};

  constructor() {
  }

  get txtareaClass() {
    const errorClass = this.error ? 'eu-txtarea-error-txtarea' : '';
    return errorClass
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
