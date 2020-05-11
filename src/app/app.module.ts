import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EuButtonComponent } from './shared-components/eu-button/eu-button.component';
import { EuLabelComponent } from './shared-components/eu-label/eu-label.component';

@NgModule({
  declarations: [
    AppComponent,
    EuButtonComponent,
    EuLabelComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
