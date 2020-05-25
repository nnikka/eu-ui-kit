import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'eb-accordion',
  templateUrl: './eb-accordion.component.html',
  styleUrls: ['./eb-accordion.component.scss']
})
export class EbAccordionComponent implements OnInit {

  @Input() items: any = null;

  constructor() { }

  ngOnInit(): void {
  }

}
