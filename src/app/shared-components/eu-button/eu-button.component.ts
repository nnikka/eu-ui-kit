import { Component, OnInit, ViewChild, ElementRef, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import {
  EEuButtonColor,
  EEuButtonColorType,
  EEuButtonContentPositionType,
  EEuButtonContentPosition,
  EEuButtonSize,
  EEuButtonSizeType,
  EEuButtonTypeType,
  EEuButtonType,
  EEuButtonWidth,
  EEuButtonWidthType
} from './eu-button.schematics';

@Component({
  selector: 'eu-button',
  templateUrl: './eu-button.component.html',
  styleUrls: ['./eu-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EuButtonComponent implements OnInit {
  @Input() size: EEuButtonSizeType = EEuButtonSize.medium;
  @Input() width: EEuButtonWidthType = null;
  @Input() contentPosition: EEuButtonContentPositionType =
    EEuButtonContentPosition.center;
  @Input() color: EEuButtonColorType = EEuButtonColor.primary;
  @Input() textColor: string = null;
  @Input() type: EEuButtonTypeType = EEuButtonType.default;
  @Input() rounded: boolean = false;
  @Input() disabled: boolean = false;
  @Input() iconClass: string = null;
  @Input() text: string = null;
  @Input() loading: boolean = false;
  @Input() label: string | number = null;
  @Input() labelColor: string = null;
  @Input() labelTextColor: string = null;
  //not implemented
  @Input() to: string = null;

  @HostBinding('style.display') hostElementDisplay = 'inline-block';

  @ViewChild('hoverBackdrop', { read: ElementRef }) hoverBackdrop: ElementRef;
  @ViewChild('hoverBackdropCircle', { read: ElementRef }) hoverBackdropCircle: ElementRef;
  @ViewChild('btnElement', { read: ElementRef }) btnElement: ElementRef;

  get btnClass(): string {
    let colorClass = EEuButtonColor[this.color] ? `eu-btn-color-${this.color}` : "";
    let widthClass = EEuButtonWidth[this.width] ? `eu-btn-width-${this.width}` : "";
    let disabledClass = this.disabled ? `eu-btn-disabled` : "";
    let loadingClass = this.loading ? `eu-btn-loading` : "";
    let roundedClass = this.rounded ? `eu-btn-rounded` : "";
    return `${disabledClass} ${loadingClass} ${colorClass} ${roundedClass} eu-btn-size-${this.size} ${widthClass}
      eu-btn-type-${this.type} eu-btn-content-${this.contentPosition}`;
  }

  get btnStyle(): object {
    let styleObj = {};
    if (this.color && !EEuButtonColor[this.color]) {
      if (this.type === EEuButtonType.default) {
        styleObj["background-color"] = this.color
      } else {
        styleObj["border-color"] = this.color
        styleObj["color"] = this.color
      }
    }
    if (this.textColor) {
      styleObj["color"] = this.textColor;
    }
    if (this.width && !EEuButtonWidth[this.width]) {
      styleObj["width"] = this.width + "px";
    }
    return styleObj;
  }

  get labelStyle(): object {
    let styleObj = {};
    if (this.labelColor) {
      styleObj["background-color"] = this.labelColor
    }
    if (this.labelTextColor) {
      styleObj["color"] = this.labelTextColor
    }
    return styleObj;
  }

  constructor() {

  }

  ngOnInit(): void {
    if (this.width && EEuButtonWidth[this.width] === EEuButtonWidth.full) {
      this.hostElementDisplay = "block";
    }
  }

  handleCircleOverlay(e): void {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    this.hoverBackdrop.nativeElement.style.left = `${x}px`;
    this.hoverBackdrop.nativeElement.style.top = `${y}px`;
  }

  mouseEnter(e): void {
    this.handleCircleOverlay(e);
    const circleOverlay = (this.btnElement.nativeElement.offsetWidth + 10) + "px";
    this.hoverBackdropCircle.nativeElement.setAttribute('style',
      `padding: ${circleOverlay}; margin-top: calc(-1 * ${circleOverlay}); margin-left: calc(-1 * ${circleOverlay});`);
  }

  mouseLeave(e): void {
    this.handleCircleOverlay(e);
    this.hoverBackdropCircle.nativeElement.setAttribute('style',
      `padding: none; margin-top: none; margin-left: none;`);
  }
}
