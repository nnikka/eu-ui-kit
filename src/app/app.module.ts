import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EuButtonComponent } from './shared-components/eu-button/eu-button.component';
import { EuIconComponent } from './shared-components/eu-icon/eu-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    EuButtonComponent,
    EuIconComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
