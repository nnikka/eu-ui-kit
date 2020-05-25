import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { IEbColumnMenuItem } from './eb-column-meu.schematics';

@Component({
  selector: 'eb-column-menu',
  templateUrl: './eb-column-menu.component.html',
  styleUrls: ['./eb-column-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EbColumnMenuComponent implements OnInit {
  @Input() items: IEbColumnMenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
