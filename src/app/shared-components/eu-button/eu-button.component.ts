import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

export enum EEuButtonSize {
  mini = "mini",
  small = "small",
  medium = "medium",
  large = "large",
  xlarge = "xlarge"
}
export type EEuButtonSizeType = EEuButtonSize.mini | EEuButtonSize.small | EEuButtonSize.medium | EEuButtonSize.large | EEuButtonSize.xlarge;

export enum EEuButtonContentPosition {
  left = "left",
  right = "right",
  center = "center"
}
export type EEuButtonContentPositionType = EEuButtonContentPosition.left | EEuButtonContentPosition.right | EEuButtonContentPosition.center;

export enum EEuButtonColor {
  primary = "primary",
  secondary = "secondary",
  success = "success",
  error = "error",
  warning = "warning"
}
export type EEuButtonColorType = EEuButtonColor.primary | EEuButtonColor.secondary | EEuButtonColor.success | EEuButtonColor.error | EEuButtonColor.warning;

export enum EEuButtonType {
  normal = "normal",
  outline = "outline",
  text = "text"
}

@Component({
  selector: 'eu-button',
  templateUrl: './eu-button.component.html',
  styleUrls: ['./eu-button.component.scss']
})
export class EuButtonComponent implements OnInit {
  @ViewChild('hoverBackdrop', { read: ElementRef }) hoverBackdrop: ElementRef;

  @Input() size: EEuButtonSizeType = EEuButtonSize.medium;
  @Input() type: string;
  @Input() icon: string;
  @Input() position: EEuButtonContentPosition.center | EEuButtonContentPosition.left | EEuButtonContentPosition.right = EEuButtonContentPosition.center;

  hoverActive: Boolean;
  disabled: Boolean;

  constructor() {
    // this.size = 'small';
    // this.type = 'primary';
    // this.position = 'center';
    // this.hoverActive = false;
    // this.disabled = false;
  }

  ngOnInit(): void {
    this.disabled = this.type === 'disabled';
  }

  mouseEnter(e): void {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left; //x position within the btn.
    const y = e.clientY - rect.top; //y position within the btn.
    this.hoverBackdrop.nativeElement.style.left = `${x}px`;
    this.hoverBackdrop.nativeElement.style.top = `${y}px`;
    this.hoverActive = true;
  }

  mouseLeave(e): void {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left; //x position within the btn.
    const y = e.clientY - rect.top; //y position within the btn.
    this.hoverBackdrop.nativeElement.style.left = `${x}px`;
    this.hoverBackdrop.nativeElement.style.top = `${y}px`;
    this.hoverActive = false;
  }

  getBtnClasses(): string {
    return `btn-${this.size} btn-${this.type} btn-${this.position}`;
  }
}
