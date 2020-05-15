import { Component, OnInit, HostBinding, Input, ChangeDetectionStrategy } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EuLabelComponent implements OnInit {
  @Input() color: EEuLabelColorType = EEuLabelColor.primary;
  @Input() textColor: EEuLabelTextColorType = EEuLabelTextColor.white;
  @Input() size: EEuLabelSizeType = EEuLabelSize.medium;
  @Input() type: EEuLabelTypeType = EEuLabelType.default;
  @Input() iconClass: string = null;

  constructor() { }

  get styleClass(): string {
    let colorClass = EEuLabelColor[this.color] ? `eu-lbl-color-${this.color}` : '';
    let textColorClass = EEuLabelTextColor[this.textColor] ? `eu-lbl-text-color-${this.textColor}` : '';
    let sizeClass = EEuLabelSize[this.size] ? `eu-lbl-size-${this.size}` : '';
    let typeClass = EEuLabelType[this.type] ? `eu-lbl-type-${this.type}` : '';
    return `${colorClass} ${textColorClass} ${sizeClass} ${typeClass}`;
  }

  get styleObject(): object {
    let styleObj = {};
    if (this.color && !EEuLabelColor[this.color]) {
      styleObj["background-color"] = this.color
    }
    if (this.textColor && !EEuLabelTextColor[this.textColor]) {
      styleObj["color"] = this.textColor
    }
    return styleObj;
  }

  ngOnInit(): void {
  }
}
