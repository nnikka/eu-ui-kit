import { Component, OnInit, ViewChild, ElementRef, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'eu-radio',
  templateUrl: './eu-radio.component.html',
  styleUrls: ['./eu-radio.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EuRadioComponent),
      multi: true,
    },
  ],
})
export class EuRadioComponent implements OnInit, ControlValueAccessor {


  private _value: any;
  private _onChange: (_: any) => void = (_) => {};
  private _onTouch: () => void = () => {};

  constructor() { }

  ngOnInit(): void {

  }

  set value(value: any) {
    if (value !== undefined && this._value !== value) {
      this._value = value;
      this._onChange(value);
    }
  }
  
  get value() {
    return this._value
  }
  
  //model -> view
  writeValue(value: any): void {
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
  }

}
