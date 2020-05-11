import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui-kit';
  euInputValue: string = "okkok";

  mc(e) {
    console.log("from app")
  }

  testfunction() {
    // this.euInputValue += "a"
  }
}
