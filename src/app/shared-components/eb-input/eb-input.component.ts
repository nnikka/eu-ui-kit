import { Component, OnInit, Input, Self, Optional, HostBinding, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import {
  EEbInputTypeType,
  EEbInputType,
  EEbInputPasswordStrengthType,
  EEbInputPasswordStrength,
} from './eb-input.schematics';

@Component({
  selector: 'eb-input',
  templateUrl: './eb-input.component.html',
  styleUrls: ['./eb-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EbInputComponent implements OnInit, ControlValueAccessor {
  @Input() prefixIcon: string;
  @Input() suffixIcon: string;
  @Input() label: string;
  @Input() placeHolder: string = "";
  @Input() type: EEbInputTypeType = EEbInputType.text;
  @Input() disabled: boolean;
  @Input() readonly: boolean = false;
  @Input() showErrorMessage: boolean = true;
  @Input() errorMessages: any = {};
  @Input() showPassText: string = "show";
  @Input() hidePassText: string = "hide";
  @Input() visiblePassIconClass: string = "eu-icon-eye-opened";
  @Input() hiddenPassIConClass: string = "eu-icon-eye-closed";
  @Input() passStrength: EEbInputPasswordStrengthType =
    EEbInputPasswordStrength.none;
  @Input() clearIconClass: string = "eu-icon-cancel";
  @Input() clearable: boolean = false;
  @Input() width: number = null;
  @Input() minHeight: "auto" | number = 75;
  @Input() iconSize: number = 15;
  @Input() prefixImg: string;
  
  @Output() inputFocus = new EventEmitter();
  @Output() inputBlur = new EventEmitter();

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
    let prefixIconClass = this.prefixIcon ? 'eb-inpt-pre-icon-input' : '';
    let suffixIconClass = this.suffixIcon ? 'eb-inpt-suf-icon-input' : '';
    let prefixImgClass = this.prefixImg ? 'eb-inpt-pre-img-input' : '';
    let errorClass = this.showError ? 'eb-inpt-error-input' : '';
    let passwordClass =
      this.type === 'password' ? 'eb-inpt-password-input' : '';
    let inputOpenedClass = this.value ? 'eb-inpt-opened' : '';
    return `${prefixIconClass} ${suffixIconClass} ${errorClass} ${passwordClass} ${inputOpenedClass} ${prefixImgClass}`;
  }

  get passStrengthClass(): string {
    return `eb-inpt-password-strength-${this.passStrength}`;
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

  get iconStyle() {
    let styleObj = {};
    if (this.iconSize) {
      styleObj['font-size'] = this.iconSize + "px";
      styleObj['vertical-align'] = 'bottom';
    }
    return styleObj;
  }

  ngOnInit(): void {
    if (this.width) {
      this.hostElementDisplay = "inline-block";
      this.hostElementWidth = this.width + "px";
    }
    if (this.prefixImg) this.prefixIcon = undefined;
  }

  onClearInput() {
    this.value = null;
  }

  onFocus() {
    this.inputFocus.emit();
    this.showPlaceHolder = true;
  }

  onBlur() {
    this.inputBlur.emit();
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
