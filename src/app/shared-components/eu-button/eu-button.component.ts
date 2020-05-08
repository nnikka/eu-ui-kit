import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import {
  EEuButtonColor,
  EEuButtonColorType,
  EEuButtonContentPositionType,
  EEuButtonContentPosition,
  EEuButtonSize,
  EEuButtonSizeType,
  EEuButtonTypeType,
  EEuButtonType,
} from './eu-button.schematics';

@Component({
  selector: 'eu-button',
  templateUrl: './eu-button.component.html',
  styleUrls: ['./eu-button.component.scss'],
})
export class EuButtonComponent implements OnInit {
  @Input() size: EEuButtonSizeType = EEuButtonSize.medium;
  @Input() position: EEuButtonContentPositionType =
    EEuButtonContentPosition.center;
  @Input() color: EEuButtonColorType = EEuButtonColor.primary;
  @Input() type: EEuButtonTypeType = EEuButtonType.normal;
  @Input() stretched: boolean = false;
  @Input() disabled: boolean = false;
  @Input() icon: string = null;
  @Input() text: string = null;
  @Input() to: string = null;
  @Input() loading: boolean = false;

  @ViewChild('hoverBackdrop', { read: ElementRef }) hoverBackdrop: ElementRef;

  hoverActive: Boolean;
  // disabled: Boolean;

  get styleClass(): string {
    let colorClass = "";
    if (EEuButtonColor[this.color]) {
      colorClass = `eu-btn-color-${this.color}`
    }
    return `${colorClass} eu-btn-size-${this.size} eu-btn-type-${this.type} eu-btn-content-${this.position}`;
  }

  constructor() {
    // this.size = 'small';
    // this.type = 'primary';
    // this.position = 'center';
    // this.hoverActive = false;
    // this.disabled = false;
  }

  ngOnInit(): void {
    // this.disabled = this.type === 'disabled';
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
