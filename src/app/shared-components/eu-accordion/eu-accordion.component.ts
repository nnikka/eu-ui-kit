import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'eu-accordion',
  templateUrl: './eu-accordion.component.html',
  styleUrls: ['./eu-accordion.component.scss']
})
export class EuAccordionComponent implements OnInit {

  @Input() items: any = null;

  constructor() { }

  ngOnInit(): void {
  }

}
