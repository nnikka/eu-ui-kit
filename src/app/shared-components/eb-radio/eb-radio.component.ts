import {
  Component,
  OnInit,
  Input,
  Self,
  Optional,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'eb-radio',
  templateUrl: './eb-radio.component.html',
  styleUrls: ['./eb-radio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EbRadioComponent implements OnInit, ControlValueAccessor {
  @Input() value: any;
  @Input() name: any;
  @Input() label: any;

  @Input() disabled: boolean;
  @Input() errorMessages: any = {};
  @Input() minHeight: 'auto' | number = 45;

  private _ngValue: any;
  private _onChange: (_: any) => void = (_) => {};
  private _onTouch: () => void = () => {};

  constructor(@Self() @Optional() public control: NgControl) {
    this.control && (this.control.valueAccessor = this);
  }

  get nameAttr() {
    return (this.control && !this.name) ? this.control.name : this.name;
  }

  ngOnInit(): void {
    if (this.control && !this.name) {
      this.name = this.control.name;
    }
  }

  get radioClass() {
    let disabledClass = this.disabled ? 'eb-radio-disabled' : '';
    return disabledClass;
  }

  get radioStyle(): object {
    let styleObj = {};
    if (this.minHeight !== "auto") {
      styleObj['min-height'] = this.minHeight + "px";
    }
    return styleObj;
  }

  set ngValue(value: any) {
    if (value !== undefined && this._ngValue !== value) {
      this.change(value);
    }
  }

  get ngValue() {
    return this._ngValue;
  }

  //model -> view
  writeValue(value: any): void {
    this.ngValue = value;
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

  change(value: any) {
    this._ngValue = value;
    this._onChange(value);
  }
}
