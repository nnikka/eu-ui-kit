import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IEuColumnIconOptionsItem } from './eu-column-icon-options.schematics';

@Component({
  selector: 'eu-column-icon-options',
  templateUrl: './eu-column-icon-options.component.html',
  styleUrls: ['./eu-column-icon-options.component.scss']
})
export class EuColumnIconOptionsComponent implements OnInit {
  @Input() items: IEuColumnIconOptionsItem[] = [];
  @Output() itemClicked = new EventEmitter<IEuColumnIconOptionsItem>();

  constructor() { }

  ngOnInit(): void {
  }

  onItemClick($event, item: IEuColumnIconOptionsItem): void {
    this.itemClicked.emit(item);
  }

}
