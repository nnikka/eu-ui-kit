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
  @Input() width: EEuButtonWidth = null;
  @Input() contentPosition: EEuButtonContentPositionType =
    EEuButtonContentPosition.center;
  @Input() color: EEuButtonColorType = EEuButtonColor.primary;
  @Input() type: EEuButtonTypeType = EEuButtonType.default;
  @Input() disabled: boolean = false;
  @Input() icon: string = null;
  @Input() text: string = null;
  @Input() to: string = null;
  @Input() loading: boolean = false;

  @HostBinding('style.display') hostElementDisplay = 'inline-block';

  @ViewChild('hoverBackdrop', { read: ElementRef }) hoverBackdrop: ElementRef;
  @ViewChild('hoverBackdropCircle', { read: ElementRef }) hoverBackdropCircle: ElementRef;
  @ViewChild('btnElement', { read: ElementRef }) btnElement: ElementRef;

  get styleClass(): string {
    let colorClass = "";
    if (EEuButtonColor[this.color]) {
      colorClass = `eu-btn-color-${this.color}`
    }
    let widthClass = "";
    if (EEuButtonWidth[this.width]) {
      widthClass = `eu-btn-width-${this.width}`
    }
    return `${colorClass} eu-btn-size-${this.size} ${widthClass} eu-btn-type-${this.type} eu-btn-content-${this.contentPosition}`;
  }

  constructor() {

  }

  ngOnInit(): void {
    if (this.width && EEuButtonWidth[this.width] === EEuButtonWidth.full) {
      this.hostElementDisplay = "block";
    }
  }

  mouseEnter(e): void {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left; //x position within the btn.
    const y = e.clientY - rect.top; //y position within the btn.
    this.hoverBackdrop.nativeElement.style.left = `${x}px`;
    this.hoverBackdrop.nativeElement.style.top = `${y}px`;
    const circleOverlay = (this.btnElement.nativeElement.offsetWidth + 10) + "px";
    this.hoverBackdropCircle.nativeElement.setAttribute('style',
      `padding: ${circleOverlay}; margin-top: calc(-1 * ${circleOverlay}); margin-left: calc(-1 * ${circleOverlay});`);
  }

  mouseLeave(e): void {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left; //x position within the btn.
    const y = e.clientY - rect.top; //y position within the btn.
    this.hoverBackdrop.nativeElement.style.left = `${x}px`;
    this.hoverBackdrop.nativeElement.style.top = `${y}px`;
    this.hoverBackdropCircle.nativeElement.setAttribute('style',
      `padding: none; margin-top: none; margin-left: none;`);
  }
}
