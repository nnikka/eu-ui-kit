import {
  Component,
  OnInit,
  Input,
  HostBinding,
  Self,
  Optional,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'eu-slider',
  templateUrl: './eu-slider.component.html',
  styleUrls: ['./eu-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EuSliderComponent implements OnInit, ControlValueAccessor {
  @Input() width: number = null;
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() valuePrefix: string = '';
  @Input() valueSuffix: string = '';
  @Input() step: number = 25;
  @Input() showTooltip: boolean = true;
  @Input() disabled: boolean = true;
  @Input() errorMessages: any = {};
  @Input() minHeight: "auto" | number = 125;
  @Input() padding: number = 0;

  @HostBinding('style.width') hostElementWidth = '100%';
  @HostBinding('style.display') hostElementDisplay = 'inline-block';

  private _value: number;
  private _onChange: (_: any) => void = (_) => {};
  private _onTouch: () => void = () => {};

  constructor(@Self() @Optional() public control: NgControl) {
    this.control && (this.control.valueAccessor = this);
  }

  ngOnInit(): void {
    if (this.width) {
      this.hostElementDisplay = 'inline-block';
      this.hostElementWidth = this.width + 'px';
    }
    this._value = (this._value && this._value <= this.max && this._value >= this.min) ? this._value : this.min;
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

  get slideBarStyle(): object {
    let style = `calc(${this.currentValuePercentage}% + (${this.sliderOffset}px))`;
    let styleObj = {};
    styleObj['width'] = style;
    return styleObj;
  }

  get tooltipStyle() {
    let style = `calc(${this.currentValuePercentage}% + (${this.sliderOffset}px))`;
    let styleObj = {};
    styleObj['left'] = style;
    return styleObj;
  }

  get containerStyle() {
    let styleObj = {};
    styleObj['padding'] = `0 ${this.padding}px`;
    if (this.minHeight !== "auto") {
      styleObj['min-height'] = this.minHeight + "px";
    }
    return styleObj;
  }

  get containerClass() {
    let tooltipClass = this.showTooltip ? 'eu-slider-tooltip-container' : '';
    return tooltipClass;
  }

  get sliderOffset() {
    return 10 - this.currentValuePercentage * 0.19;
  }

  get currentValuePercentage() {
    return ((this._value - this.min) * 100) / (this.max - this.min);
  }

  set ngValue(value: any) {
    if (value !== undefined && this._value !== value) {
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

  change(value) {
    this._value = value;
    this._onChange(value);
  }
}
