import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { EuButtonComponent } from './shared-components/eu-button/eu-button.component';
import { EuTooltipComponent } from './shared-components/eu-tooltip/eu-tooltip.component';
import { EuLabelComponent } from './shared-components/eu-label/eu-label.component';
import { EuInputComponent } from './shared-components/eu-input/eu-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EuTextareaComponent } from './shared-components/eu-textarea/eu-textarea.component';
import { EuTooltipDirective } from './shared-components/eu-tooltip/eu-tooltip.directive';
import { EuRadioComponent } from './shared-components/eu-radio/eu-radio.component';
import { EuCheckboxComponent } from './shared-components/eu-checkbox/eu-checkbox.component';
import { EuToggleComponent } from './shared-components/eu-toggle/eu-toggle.component';
import { EuSliderComponent } from './shared-components/eu-slider/eu-slider.component';
import { EuRangeComponent } from './shared-components/eu-range/eu-range.component';

@NgModule({
  declarations: [
    AppComponent,
    EuButtonComponent,
    EuTooltipComponent,
    EuLabelComponent,
    EuInputComponent,
    EuTextareaComponent,
    EuTooltipDirective,
    EuRadioComponent,
    EuCheckboxComponent,
    EuToggleComponent,
    EuSliderComponent,
    EuRangeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
