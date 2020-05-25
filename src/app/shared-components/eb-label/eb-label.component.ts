import { Component, OnInit, HostBinding, Input, ChangeDetectionStrategy } from '@angular/core';
import {
  EEbLabelSize,
  EEbLabelSizeType,
  EEbLabelType,
  EEbLabelTypeType,
  EEbLabelColor,
  EEbLabelColorType,
  EEbLabelTextColor,
  EEbLabelTextColorType
} from './eb-label.schematics';

@Component({
  selector: 'eb-label',
  templateUrl: './eb-label.component.html',
  styleUrls: ['./eb-label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EbLabelComponent implements OnInit {
  @Input() color: EEbLabelColorType = EEbLabelColor.primary;
  @Input() textColor: EEbLabelTextColorType = EEbLabelTextColor.white;
  @Input() size: EEbLabelSizeType = EEbLabelSize.medium;
  @Input() type: EEbLabelTypeType = EEbLabelType.default;
  @Input() iconClass: string = null;

  constructor() { }

  get styleClass(): string {
    let colorClass = EEbLabelColor[this.color] ? `eb-lbl-color-${this.color}` : '';
    let textColorClass = EEbLabelTextColor[this.textColor] ? `eb-lbl-text-color-${this.textColor}` : '';
    let sizeClass = EEbLabelSize[this.size] ? `eb-lbl-size-${this.size}` : '';
    let typeClass = EEbLabelType[this.type] ? `eb-lbl-type-${this.type}` : '';
    return `${colorClass} ${textColorClass} ${sizeClass} ${typeClass}`;
  }

  get styleObject(): object {
    let styleObj = {};
    if (this.color && !EEbLabelColor[this.color]) {
      styleObj["background-color"] = this.color
    }
    if (this.textColor && !EEbLabelTextColor[this.textColor]) {
      styleObj["color"] = this.textColor
    }
    return styleObj;
  }

  ngOnInit(): void {
  }
}
