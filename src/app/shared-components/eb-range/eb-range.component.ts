import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Self,
  Optional,
  HostBinding,
} from '@angular/core';
import { NgControl, ControlValueAccessor } from '@angular/forms';
import { IEbRangeValue } from './eb-range.schematics';

@Component({
  selector: 'eb-range',
  templateUrl: './eb-range.component.html',
  styleUrls: ['./eb-range.component.scss'],
})
export class EbRangeComponent implements OnInit, ControlValueAccessor {
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() step: number = 25;
  @Input() width: number = null;
  @Input() disabled: boolean = false;
  @Input() minHeight: 'auto' | number = 150;
  @Input() padding: number = 0;
  @Input() showInputs: boolean = false;
  @Input() showTooltip: boolean = false;
  @Input() showClear: boolean = false;
  @Input() valuePrefix: string = '';
  @Input() valueSuffix: string = '';
  @Input() errorMessages: any = {};
  @Input() minFieldLabel: string = '';
  @Input() maxFieldLabel: string = '';

  @ViewChild('lowerSlide', { read: ElementRef }) lowerSlide: ElementRef;
  @ViewChild('upperSlide', { read: ElementRef }) upperSlide: ElementRef;

  @HostBinding('style.width') hostElementWidth = '100%';
  @HostBinding('style.display') hostElementDisplay = 'inline-block';

  private _value: IEbRangeValue = {
    upperValue: null,
    lowerValue: null,
  };
  private _onChange: (_: any) => void = (_) => {};
  private _onTouch: () => void = () => {};

  inputMin: number;
  inputMax: number;
  lowerDominant: boolean = false;

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

  ngOnInit(): void {
    if (this.width) {
      this.hostElementDisplay = 'inline-block';
      this.hostElementWidth = this.width + 'px';
    }
    this.inputMin = this._value.lowerValue;
    this.inputMax = this._value.upperValue;
  }

  upperSlideOnInput(e) {
    this.lowerDominant = false;
    if (+this.ngValue.upperValue < this._value.lowerValue + +this.step) {
      this._value.upperValue = +this.ngValue.upperValue;
      this.upperSlide.nativeElement.value = this.lowerSlide.nativeElement.value;
      this._value.upperValue = this._value.lowerValue;
    }
    this.change(this._value);
  }

  lowerSlideOnInput(e) {
    this.lowerDominant = true;
    if (+this.ngValue.lowerValue > this._value.upperValue - +this.step) {
      this._value.lowerValue = +this.ngValue.lowerValue;
      this.lowerSlide.nativeElement.value = this.upperSlide.nativeElement.value;
      this._value.lowerValue = this._value.upperValue;
    }
    this.change(this._value);
  }

  inputValueChanged() {
    if (this._value.lowerValue != +this.inputMin) {
      this._value.lowerValue = Math.min(
        Math.max(this.inputMin, this.min),
        this._value.upperValue
      );
    } else {
      this._value.upperValue = Math.max(
        Math.min(this.inputMax, this.max),
        this._value.lowerValue
      );
    }
    this.change(this._value);
  }

  get sliderStyle() {
    let styleObj = {};
    if (this._value.lowerValue > this._value.upperValue - +this.step) {
      styleObj['margin-left'] = `calc(${this.currentValuePercentage(
        this._value.upperValue
      )}% + (${this.sliderOffset(this._value.upperValue)}px))`;
    } else {
      styleObj['margin-left'] = `calc(${this.currentValuePercentage(
        this._value.lowerValue
      )}% + (${this.sliderOffset(this._value.lowerValue)}px))`;
    }
    styleObj['width'] = `calc(${this.currentValuePercentage(
      this._value.upperValue
    )}% - ${this.currentValuePercentage(
      this._value.lowerValue
    )}% + (${this.sliderOffset(
      this._value.upperValue
    )}px) - (${this.sliderOffset(this._value.lowerValue)}px))`;
    return styleObj;
  }

  get upperSliderClass() {
    let edgeClass =
      this._value.upperValue >= this.max || this._value.upperValue <= this.min
        ? 'eb-edge-input'
        : '';
    let dominantClass = !this.lowerDominant ? 'dominant-slider' : '';
    return `${edgeClass} ${dominantClass}`;
  }

  get lowerSliderClass() {
    let edgeClass =
      this._value.lowerValue >= this.max || this._value.lowerValue <= this.min
        ? 'eb-edge-input'
        : '';
    let dominantClass = this.lowerDominant ? 'dominant-slider' : '';
    return `${edgeClass} ${dominantClass}`;
  }

  get containerStyle() {
    let styleObj = {};
    styleObj['padding'] = `0 ${this.padding}px`;
    if (this.minHeight !== 'auto') {
      styleObj['min-height'] = this.minHeight + 'px';
    }
    return styleObj;
  }

  get lowerTooltipStyle() {
    let styleObj = {};
    styleObj['left'] = `calc(${this.currentValuePercentage(
      this._value.lowerValue
    )}% + (${this.sliderOffset(this._value.lowerValue)}px))`;
    if (this.lowerDominant) styleObj['opacity'] = 1;
    return styleObj;
  }
  get upperTooltipStyle() {
    let styleObj = {};
    styleObj['left'] = `calc(${this.currentValuePercentage(
      this._value.upperValue
    )}% + (${this.sliderOffset(this._value.upperValue)}px))`;
    if (!this.lowerDominant) styleObj['opacity'] = 1;
    return styleObj;
  }

  get sliderInputsContainerClass() {
    return this.showTooltip ? 'eb-range-tooltip-range' : '';
  }

  set ngValue(value: IEbRangeValue) {
    if (
      value &&
      (this._value.lowerValue !== value.lowerValue ||
        this._value.upperValue !== value.upperValue)
    ) {
      value.upperValue =
        value.upperValue &&
        value.upperValue <= this.max &&
        value.upperValue >= this.min
          ? value.upperValue
          : this.max;
      value.lowerValue =
        value.lowerValue &&
        value.lowerValue <= value.upperValue &&
        value.lowerValue >= this.min
          ? value.lowerValue
          : this.min;
      this.change(value);
    }
  }

  get ngValue() {
    return this._value;
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

  sliderOffset(value) {
    return 10 - this.currentValuePercentage(value) * 0.19;
  }

  currentValuePercentage(value) {
    return ((value - this.min) * 100) / (this.max - this.min);
  }

  clearFields() {
    this.lowerDominant = true;
    this._value.lowerValue = this.min;
    this._value.upperValue = this.max;
    this.change(this._value);
  }

  change(value: IEbRangeValue) {
    this._value = { ...value };
    this.inputMax = value.upperValue;
    this.inputMin = value.lowerValue;
    this._onChange(value);
  }
}
