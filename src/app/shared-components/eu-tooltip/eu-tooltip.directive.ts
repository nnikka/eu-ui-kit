import { Directive, HostListener, ElementRef, ComponentFactoryResolver, ApplicationRef, Injector, Input, EmbeddedViewRef, OnDestroy } from '@angular/core';
import { EuTooltipComponent } from './eu-tooltip.component'
import { IEuTooltipOptions, IAdEuTooltipComponentData, IAdEuTooltipComponent, EuTooltipDefaultOptions } from './eu-tootltip.schematics';

@Directive({
  selector: '[euTooltip]'
})
export class EuTooltipDirective implements OnDestroy {
  tooltipComponentRef: any;
  elementPosition: any;
  tooltipFirstTimeShowTimeOut: any;
  tooltipDestroyTimeOut: any;

  @Input('euTooltip') tooltipValue: string;
  @Input('euTooltipOptions') euTooltipOptions: IEuTooltipOptions;

  get calculatedEuTooltipOptions(): IEuTooltipOptions {
    let result = {};
    Object.assign(result, EuTooltipDefaultOptions)
    if (this.euTooltipOptions) {
      Object.keys(result).forEach((key) => {
        if (this.euTooltipOptions[key]) {
          result[key] = this.euTooltipOptions[key];
        }
      })
    }
    return <IEuTooltipOptions>result;
  }

  get isTooltipDestroyed(): boolean {
    return this.tooltipComponentRef && this.tooltipComponentRef.hostView.destroyed;
  }

  constructor(
    private elementRef: ElementRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.show();
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hide();
  }

  public show(): void {
    this.clearTimeOuts();
    if (!this.tooltipComponentRef || this.isTooltipDestroyed) {
      this.createTooltip();
      this.tooltipFirstTimeShowTimeOut = setTimeout(() => {
        this.showTooltipElem();
      }, 10);
    } else if (!this.isTooltipDestroyed) {
      this.showTooltipElem();
    }
  }

  public hide(): void {
    this.destroyTooltip();
  }

  private createTooltip(): void {
    this.getElementPosition();
    this.tooltipComponentRef = this.componentFactoryResolver
      .resolveComponentFactory(EuTooltipComponent)
      .create(this.injector);
    (<IAdEuTooltipComponentData>(<IAdEuTooltipComponent>this.tooltipComponentRef.instance).data) = {
      parentElementPosition: this.elementPosition,
      parentElement: this.elementRef.nativeElement,
      options: this.calculatedEuTooltipOptions,
      value: this.tooltipValue
    }
    this.appRef.attachView(this.tooltipComponentRef.hostView);
    const tooltipDomElem = (this.tooltipComponentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(tooltipDomElem);
  }

  private showTooltipElem(): void {
    if (!this.tooltipComponentRef || this.isTooltipDestroyed) {
      return;
    }
    (<IAdEuTooltipComponent>this.tooltipComponentRef.instance).show = true;
  }

  private hideTooltipElem(): void {
    if (!this.tooltipComponentRef || this.isTooltipDestroyed) {
      return;
    }
    (<IAdEuTooltipComponent>this.tooltipComponentRef.instance).show = false;
  }

  private destroyTooltip(): void {
    this.clearTimeOuts();
    if (!this.isTooltipDestroyed) {
      this.hideTooltipElem();
      this.tooltipDestroyTimeOut = setTimeout(() => {
        if (!this.tooltipComponentRef || this.isTooltipDestroyed) {
          return;
        }
        this.appRef.detachView(this.tooltipComponentRef.hostView);
        this.tooltipComponentRef.destroy();
      }, 400);
    }
  }

  private getElementPosition(): void {
    this.elementPosition = this.elementRef.nativeElement.getBoundingClientRect();
  }

  private clearTimeOuts(): void {
    if (this.tooltipFirstTimeShowTimeOut) {
      clearTimeout(this.tooltipFirstTimeShowTimeOut);
    }
    if (this.tooltipDestroyTimeOut) {
      clearTimeout(this.tooltipDestroyTimeOut);
    }
  }

  ngOnDestroy(): void {
    this.clearTimeOuts();
  }

}
