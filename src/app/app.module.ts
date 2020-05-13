import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EuButtonComponent } from './shared-components/eu-button/eu-button.component';
import { EuTooltipComponent } from './shared-components/eu-tooltip/eu-tooltip.component';
import { EuLabelComponent } from './shared-components/eu-label/eu-label.component';
import { EuTooltipDirective } from './shared-components/eu-tooltip/eu-tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,
    EuButtonComponent,
    EuTooltipComponent,
    EuLabelComponent,
    EuTooltipDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
