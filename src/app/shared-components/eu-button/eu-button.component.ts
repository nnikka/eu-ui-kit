import { Component, OnInit, ViewChild, ElementRef, Input, HostBinding } from '@angular/core';
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
})
export class EuButtonComponent implements OnInit {
  @Input() size: EEuButtonSizeType = EEuButtonSize.medium;
  @Input() width: EEuButtonWidthType = null;
  @Input() contentPosition: EEuButtonContentPositionType =
    EEuButtonContentPosition.center;
  @Input() color: EEuButtonColorType = EEuButtonColor.primary;
  @Input() type: EEuButtonTypeType = EEuButtonType.default;
  @Input() rounded: boolean = false;
  @Input() disabled: boolean = false;
  @Input() iconClass: string = null;
  @Input() text: string = null;
  @Input() loading: boolean = false;
  //not implemented
  @Input() to: string = null;

  @HostBinding('style.display') hostElementDisplay = 'inline-block';

  @ViewChild('hoverBackdrop', { read: ElementRef }) hoverBackdrop: ElementRef;
  @ViewChild('hoverBackdropCircle', { read: ElementRef }) hoverBackdropCircle: ElementRef;
  @ViewChild('btnElement', { read: ElementRef }) btnElement: ElementRef;

  get styleClass(): string {
    let colorClass = EEuButtonColor[this.color] ? `eu-btn-color-${this.color}` : "";
    let widthClass = EEuButtonWidth[this.width] ? `eu-btn-width-${this.width}` : "";
    let disabledClass = this.disabled ? `eu-btn-disabled` : "";
    let loadingClass = this.loading ? `eu-btn-loading` : "";
    let roundedClass = this.rounded ? `eu-btn-rounded` : "";
    return `${disabledClass} ${loadingClass} ${colorClass} ${roundedClass} eu-btn-size-${this.size} ${widthClass}
      eu-btn-type-${this.type} eu-btn-content-${this.contentPosition}`;
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
