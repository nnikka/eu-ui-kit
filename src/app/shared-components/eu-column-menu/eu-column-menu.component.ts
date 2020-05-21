import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { IEuColumnMenuItem } from './eu-column-meu.schematics';

@Component({
  selector: 'eu-column-menu',
  templateUrl: './eu-column-menu.component.html',
  styleUrls: ['./eu-column-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EuColumnMenuComponent implements OnInit {
  @Input() items: IEuColumnMenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
