import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { EbButtonComponent } from './shared-components/eb-button/eb-button.component';
import { EbTooltipComponent } from './shared-components/eb-tooltip/eb-tooltip.component';
import { EbLabelComponent } from './shared-components/eb-label/eb-label.component';
import { EbInputComponent } from './shared-components/eb-input/eb-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EbTextareaComponent } from './shared-components/eb-textarea/eb-textarea.component';
import { EbTooltipDirective } from './shared-components/eb-tooltip/eb-tooltip.directive';
import { EbRadioComponent } from './shared-components/eb-radio/eb-radio.component';
import { EbCheckboxComponent } from './shared-components/eb-checkbox/eb-checkbox.component';
import { EbToggleComponent } from './shared-components/eb-toggle/eb-toggle.component';
import { EbSliderComponent } from './shared-components/eb-slider/eb-slider.component';
import { EbRangeComponent } from './shared-components/eb-range/eb-range.component';
import { EbColumnMenuComponent } from './shared-components/eb-column-menu/eb-column-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { InputsComponent } from './pages/inputs/inputs.component';
import { EbColumnIconOptionsComponent } from './shared-components/eb-column-icon-options/eb-column-icon-options.component';
import { EbAccordionItemComponent } from './shared-components/eb-accordion/eb-accordion-item/eb-accordion-item.component';
import { EbAccordionHeaderComponent } from './shared-components/eb-accordion/eb-accordion-header/eb-accordion-header.component';
import { EbAccordionBodyComponent } from './shared-components/eb-accordion/eb-accordion-body/eb-accordion-body.component'
import { EbAutocompleteComponent } from './shared-components/eb-autocomplete/eb-autocomplete.component'
import { EbAccordionComponent } from './shared-components/eb-accordion/eb-accordion.component';
import { EbSelectComponent } from './shared-components/eb-select/eb-select.component'

@NgModule({
  declarations: [
    AppComponent,
    EbButtonComponent,
    EbTooltipComponent,
    EbLabelComponent,
    EbInputComponent,
    EbTextareaComponent,
    EbTooltipDirective,
    EbRadioComponent,
    EbCheckboxComponent,
    EbToggleComponent,
    EbSliderComponent,
    EbRangeComponent,
    EbColumnMenuComponent,
    HomeComponent,
    InputsComponent,
    EbColumnIconOptionsComponent,
    EbAutocompleteComponent,
    EbAccordionComponent,
    EbSelectComponent,
    EbAccordionComponent,
    EbAccordionItemComponent,
    EbAccordionHeaderComponent,
    EbAccordionBodyComponent,
    EbAutocompleteComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
