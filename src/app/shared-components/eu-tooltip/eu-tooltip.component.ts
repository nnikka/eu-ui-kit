import { Component, OnInit, Input, ChangeDetectionStrategy, HostBinding, ElementRef, Renderer2 } from '@angular/core';
import { IAdEuTooltipComponentData, EEuTooltipBackgroundColor, EEuTooltipPosition } from './eu-tootltip.schematics';

@Component({
  selector: 'app-eu-tooltip',
  templateUrl: './eu-tooltip.component.html',
  styleUrls: ['./eu-tooltip.component.scss',],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EuTooltipComponent implements OnInit {
  @HostBinding('style.top') hostStyleTop: string;
  @HostBinding('style.left') hostStyleLeft: string;
  @HostBinding('class.eu-tooltip-show') hostClassShow: boolean;

  _show: boolean;
  _arrowOffset: number = 8;

  @Input() data: IAdEuTooltipComponentData;
  @Input() set show(value: boolean) {
    if (value) {
      this.setPosition();
    }
    this._show = this.hostClassShow = value;
  }

  get show(): boolean {
    return this._show;
  }

  get text(): string {
    return this.data.value ? this.data.value : this.data.options.text;
  }

  get backgroundColor(): string {
    return this.data.options.backgroundColor;
  }

  get textColor(): string {
    return this.data.options.textColor;
  }

  get position(): string {
    return this.data.options.position;
  }

  get maxWidth(): number {
    return this.data.options.maxWidth;
  }

  get parentElement(): any {
    return this.data.parentElement;
  }

  get parentElementPosition(): any {
    return this.data.parentElementPosition;
  }

  get tooltipStyle(): object {
    let styleObj = {};
    if (this.maxWidth) {
      styleObj["max-width"] = this.maxWidth + "px";
    }
    return styleObj;
  }

  get tooltipClass(): string {
    let className = "eu-tooltip-position-" + this.position;
    if (this.backgroundColor && EEuTooltipBackgroundColor[this.backgroundColor]) {
      className += " eu-tooltip-background-" + this.backgroundColor;
    }
    return className;
  }

  get tooltipTextStyle(): object {
    let styleObj = {};
    if (this.textColor) {
      styleObj["color"] = this.textColor;
    }
    return styleObj;
  }

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {

  }

  setPosition() {
    const tooltipElement = this.elementRef.nativeElement;
    const elementHeight = this.parentElement.getBoundingClientRect().height;
    const elementWidth = this.parentElement.getBoundingClientRect().width;
    const tooltipHeight = tooltipElement.clientHeight;
    const tooltipWidth = tooltipElement.clientWidth;
    const scrollY = window.pageYOffset;

    let topPosition = 0;
    let leftPosition = 0;

    if (this.position === EEuTooltipPosition.left) {
      leftPosition = this.parentElementPosition.left - tooltipWidth - this._arrowOffset;
      topPosition = (this.parentElementPosition.top + scrollY) + elementHeight / 2 - tooltipHeight / 2;
    }

    if (this.position === EEuTooltipPosition.right) {
      leftPosition = this.parentElementPosition.left + elementWidth + this._arrowOffset;
      topPosition = (this.parentElementPosition.top + scrollY) + elementHeight / 2 - tooltipHeight / 2;
    }

    if (this.position === EEuTooltipPosition.top) {
      topPosition = (this.parentElementPosition.top + scrollY) - tooltipHeight - this._arrowOffset;
      leftPosition = (this.parentElementPosition.left + elementWidth / 2) - tooltipWidth / 2;
    }

    if (this.position === EEuTooltipPosition.bottom) {
      topPosition = (this.parentElementPosition.top + scrollY) + elementHeight + this._arrowOffset;
      leftPosition = (this.parentElementPosition.left + elementWidth / 2) - tooltipWidth / 2;
    }

    this.hostStyleTop = topPosition + "px";
    this.hostStyleLeft = leftPosition + "px";
  }

}
