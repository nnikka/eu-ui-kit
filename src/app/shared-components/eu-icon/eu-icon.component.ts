import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'eu-icon',
  templateUrl: './eu-icon.component.html',
  styleUrls: ['./eu-icon.component.scss']
})
export class EuIconComponent implements OnInit {
  @Input() name: string = null;

  constructor() { }

  ngOnInit(): void {
  }

}
