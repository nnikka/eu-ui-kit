import { Component, OnInit, Input, Self, Optional, HostBinding, ChangeDetectionStrategy } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EuInputComponent implements OnInit, ControlValueAccessor {
  @Input() iconClass: string;
  @Input() label: string;
  @Input() placeHolder: string = "";
  @Input() type: EEuInputTypeType = EEuInputType.text;
  @Input() disabled: boolean;
  @Input() showErrorMessage: boolean = true;
  @Input() errorMessages: any = {};
  @Input() showPassText: string = "show";
  @Input() hidePassText: string = "hide";
  @Input() visiblePassIconClass: string = "eu-icon-eye-opened";
  @Input() hiddenPassIConClass: string = "eu-icon-eye-closed";
  @Input() passStrength: EEuInputPasswordStrengthType =
    EEuInputPasswordStrength.none;
  @Input() width: number = null;
  @Input() minHeight: "auto" | number = 75;

  @HostBinding('style.display') hostElementDisplay = 'inline-block';
  @HostBinding('style.width') hostElementWidth = '100%';

  passIsVisible: boolean = false;
  showPlaceHolder: boolean = false;

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

  get inptClass(): string {
    let iconClass = this.iconClass ? 'eu-inpt-icon-input' : '';
    let errorClass = this.showError ? 'eu-inpt-error-input' : '';
    let passwordClass =
      this.type === 'password' ? 'eu-inpt-password-input' : '';
    let inputOpenedClass = this.value ? 'eu-inpt-opened' : '';
    return `${iconClass} ${errorClass} ${passwordClass} ${inputOpenedClass}`;
  }

  get passStrengthClass(): string {
    return `eu-inpt-password-strength-${this.passStrength}`;
  }

  get usePassStrength(): string {
    return this.passStrength !== 'none' && this.passStrength;
  }

  get passVisibilityIcon(): string {
    return this.passIsVisible ? this.hiddenPassIConClass : this.visiblePassIconClass
  }

  get passVisibilityBtntext(): string {
    return this.passIsVisible ? this.hidePassText : this.showPassText
  }

  get placeHolderValue(): string {
    if (this.showPlaceHolder) {
      return this.placeHolder;
    } else {
      return "";
    }
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

  get inputContainerStyle(): object {
    let styleObj = {};
    if (this.minHeight !== "auto") {
      styleObj['min-height'] = this.minHeight + "px";
    }
    return styleObj;
  }

  ngOnInit(): void {
    if (this.width) {
      this.hostElementDisplay = "inline-block";
      this.hostElementWidth = this.width + "px";
    }
  }

  onFocus() {
    this.showPlaceHolder = true;
  }

  onBlur() {
    this._onTouch();
    this.showPlaceHolder = false;
  }

  togglePassVisibility() {
    this.passIsVisible = !this.passIsVisible;
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
