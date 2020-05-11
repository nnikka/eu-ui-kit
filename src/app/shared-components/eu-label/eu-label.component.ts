import { Component, OnInit, HostBinding, Input } from '@angular/core';
import {
  EEuLabelSize,
  EEuLabelSizeType,
  EEuLabelType,
  EEuLabelTypeType,
  EEuLabelColor,
  EEuLabelColorType,
  EEuLabelTextColor,
  EEuLabelTextColorType
} from './eu-label.schematics';

@Component({
  selector: 'eu-label',
  templateUrl: './eu-label.component.html',
  styleUrls: ['./eu-label.component.scss'],
})
export class EuLabelComponent implements OnInit {
  @Input() color: EEuLabelColorType = EEuLabelColor.primary;
  @Input() textColor: EEuLabelTextColorType = EEuLabelTextColor.white;
  @Input() size: EEuLabelSizeType = EEuLabelSize.medium;
  @Input() type: EEuLabelTypeType = EEuLabelType.default;
  @Input() iconClass: string = null;

  @HostBinding('style.display') hostElementDisplay = 'inline-block';
  @HostBinding('style.background-color') hostElementColor;
  @HostBinding('style.color') hostElementTextColor;

  constructor() {}

  get styleClass(): string {
    const colorClass = EEuLabelColor[this.color] ? `eu-lbl-color-${this.color}` : '';
    const textColorClass = EEuLabelTextColor[this.textColor] ? `eu-lbl-text-color-${this.textColor}` : '';
    const sizeClass = EEuLabelSize[this.size] ? `eu-lbl-size-${this.size}` : '';
    const typeClass = EEuLabelType[this.type] ? `eu-lbl-type-${this.type}` : '';
    return `${colorClass} ${textColorClass} ${sizeClass} ${typeClass}`;
  }

  ngOnInit(): void {
    if (!EEuLabelColor[this.color]) this.hostElementColor = this.color;
    if (!EEuLabelTextColor[this.textColor]) this.hostElementTextColor = this.textColor;
  }
}
