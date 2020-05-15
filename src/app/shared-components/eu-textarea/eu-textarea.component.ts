import { Component, OnInit, Input, forwardRef, Self, Optional, HostBinding } from '@angular/core';
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
  @Input() errorMessages: any = {};
  @Input() width: number = null;
  @Input() minHeight: number = 45;

  @HostBinding('style.display') hostElementDisplay = 'inline-block';
  @HostBinding('style.width') hostElementWidth = '100%';

  private _value: string;
  private _onChange: (_: any) => void = (_) => { };
  private _onTouch: () => void = () => { };

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
    if (errors) {
      return Object.keys(errors).map((key) =>
        this.errorMessages[key] ? this.errorMessages[key] : ''
      );
    } else {
      return [];
    }
  }

  get txtareaClass() {
    let errorClass = this.showError ? 'eu-txtarea-error-txtarea' : '';
    let txtAreaOpenedClass = this.value ? 'eu-txtarea-opened' : '';
    return `${errorClass} ${txtAreaOpenedClass}`
  }

  get textareaStyle(): object {
    let styleObj = {};
    if (this.minHeight) {
      styleObj["min-height"] = this.minHeight + "px";
      return styleObj;
    }
  }

  get textareaContainerStyle(): object {
    let styleObj = {};
    if (this.minHeight) {
      let minh = this.minHeight + 60;
      styleObj["min-height"] = minh + "px";
      return styleObj;
    }
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
    if (this.width) {
      this.hostElementDisplay = "inline-block";
      this.hostElementWidth = this.width + "px";
    }
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
