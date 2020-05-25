import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IEbColumnIconOptionsItem } from './eb-column-icon-options.schematics';

@Component({
  selector: 'eb-column-icon-options',
  templateUrl: './eb-column-icon-options.component.html',
  styleUrls: ['./eb-column-icon-options.component.scss']
})
export class EbColumnIconOptionsComponent implements OnInit {
  @Input() items: IEbColumnIconOptionsItem[] = [];
  @Output() itemClicked = new EventEmitter<IEbColumnIconOptionsItem>();

  constructor() { }

  ngOnInit(): void {
  }

  onItemClick($event, item: IEbColumnIconOptionsItem): void {
    this.itemClicked.emit(item);
  }

}
