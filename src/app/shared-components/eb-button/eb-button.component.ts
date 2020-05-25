import { Component, OnInit, ViewChild, ElementRef, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import {
  EEbButtonColor,
  EEbButtonColorType,
  EEbButtonContentPositionType,
  EEbButtonContentPosition,
  EEbButtonSize,
  EEbButtonSizeType,
  EEbButtonTypeType,
  EEbButtonType,
  EEbButtonWidth,
  EEbButtonWidthType
} from './eb-button.schematics';

@Component({
  selector: 'eb-button',
  templateUrl: './eb-button.component.html',
  styleUrls: ['./eb-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EbButtonComponent implements OnInit {
  @Input() size: EEbButtonSizeType = EEbButtonSize.medium;
  @Input() width: EEbButtonWidthType = null;
  @Input() contentPosition: EEbButtonContentPositionType =
    EEbButtonContentPosition.center;
  @Input() color: EEbButtonColorType = EEbButtonColor.primary;
  @Input() textColor: string = null;
  @Input() type: EEbButtonTypeType = EEbButtonType.default;
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
    let colorClass = EEbButtonColor[this.color] ? `eb-btn-color-${this.color}` : "";
    let widthClass = EEbButtonWidth[this.width] ? `eb-btn-width-${this.width}` : "";
    let disabledClass = this.disabled ? `eb-btn-disabled` : "";
    let loadingClass = this.loading ? `eb-btn-loading` : "";
    let roundedClass = this.rounded ? `eb-btn-rounded` : "";
    return `${disabledClass} ${loadingClass} ${colorClass} ${roundedClass} eb-btn-size-${this.size} ${widthClass}
      eb-btn-type-${this.type} eb-btn-content-${this.contentPosition}`;
  }

  get btnStyle(): object {
    let styleObj = {};
    if (this.color && !EEbButtonColor[this.color]) {
      if (this.type === EEbButtonType.default) {
        styleObj["background-color"] = this.color
      } else {
        styleObj["border-color"] = this.color
        styleObj["color"] = this.color
      }
    }
    if (this.textColor) {
      styleObj["color"] = this.textColor;
    }
    if (this.width && !EEbButtonWidth[this.width]) {
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
    if (this.width && EEbButtonWidth[this.width] === EEbButtonWidth.full) {
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
