import {
  Component,
  OnInit,
  HostBinding,
  Input,
  ViewChild,
  ElementRef,
  Self,
  Optional,
  HostListener,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { EEbSelectType } from './eb-select.schematics';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'eb-select',
  templateUrl: './eb-select.component.html',
  styleUrls: ['./eb-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EbSelectComponent implements OnInit {
  @Input() prefixIcon: string;
  @Input() suffixIcon: string;
  @Input() label: string;
  @Input() width: number = null;
  @Input() items: Array<any> = [];
  @Input() myItems: Array<any> = [];
  @Input() type: string = EEbSelectType.default;
  @Input() minHeight: 'auto' | number = 75;
  @Input() placeHolder: string = '';
  @Input() errorMessages: any = {};
  @Input() clearable: boolean = false;
  @Input() disabled: boolean = false;
  @Input() emptyOption: boolean = false;
  @Input() actionLabel: string;
  @Input() actionIcon: string;

  @Output() actionClicked = new EventEmitter();

  @HostBinding('style.width') hostElementWidth = '100%';
  @HostBinding('style.display') hostElementDisplay = 'inline-block';

  @ViewChild('dropdown', { read: ElementRef }) dropdown: ElementRef;

  focused: boolean = false;
  inputValue: any;
  showDropdown: boolean = true;
  currentImage: string;
  activeItemElement: any;

  private _value: any;
  private _onChange: (_: any) => void = (_) => {};
  private _onTouch: () => void = () => {};

  constructor(@Self() @Optional() public control: NgControl) {
    this.control && (this.control.valueAccessor = this);
  }

  @HostListener('document:click', ['$event'])
  onClick(e) {
    this.focused = false;
  }

  @HostListener('document:keydown', ['$event']) charKeyDownHandler(
    event: KeyboardEvent
  ) {
    if (this.focused) {
      event.preventDefault();
      let key = event.key.toLowerCase();
      if (key.length == 1 && key.match(/[a-z]/i)) {
        let chosenItemIndex;
        if (this.type == EEbSelectType.default) {
          chosenItemIndex = this.myItems.findIndex((item) =>
            item.name.toLowerCase().startsWith(key)
          );
        } else {
          chosenItemIndex = this.myItems.findIndex((item) =>
            item.toLowerCase().startsWith(key)
          );
        }
        var item = this.dropdown.nativeElement.children[chosenItemIndex + 1];
        this.activateItem(item);
        let topPos = item.offsetTop;
        this.dropdown.nativeElement.scrollTop = topPos - 10;
      }
    }
  }

  // @HostListener('document:keydown.enter', ['$event']) enterKeyDownHandler(
  //   event: KeyboardEvent
  // ) {
  //   if (this.focused) {
  //     if (this.activeItemElement) {
  //       this.activeItemElement.click();
  //       setTimeout(() => {
  //         this.dropdown.nativeElement.click();
  //       }, 1000);
  //     }
  //   }
  // }

  ngOnInit(): void {
    if (this.width) {
      this.hostElementDisplay = 'inline-block';
      this.hostElementWidth = this.width + 'px';
    }
    if (this.emptyOption) {
      this.myItems = [
        this.type == EEbSelectType.default ? { name: '', value: '' } : '',
        ...this.items,
      ];
    } else {
      this.myItems = [...this.items];
    }
  }

  get invalid(): boolean {
    return this.control ? this.control.invalid : false;
  }

  get showError(): boolean {
    if (!this.control) {
      return false;
    }
    const { dirty, touched } = this.control;
    return this.invalid ? touched : false;
  }

  get errors(): Array<string> {
    if (!this.control) {
      return [];
    }
    const { errors } = this.control;
    if (errors) {
      return Object.keys(errors).map((key) =>
        this.errorMessages[key] ? this.errorMessages[key] : ''
      );
    } else {
      return [];
    }
  }

  get optionsClass() {
    return this.focused ? '' : 'eb-select-hidden';
  }

  get inputSelectStyle(): object {
    let styleObj = {};
    if (this.minHeight !== 'auto') {
      styleObj['min-height'] = this.minHeight + 'px';
    }
    return styleObj;
  }

  onFocus() {
    this.focused = true;
  }

  set ngValue(value: any) {
    if (value !== undefined && this._value !== value) {
      this.change(value);
    }
  }

  get ngValue() {
    return this._value;
  }

  //model -> view
  writeValue(value: any): void {
    this.ngValue = value;
  }

  //view -> model
  registerOnChange(fn: (_: any) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this._onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  change(value) {
    if (value != null && value != undefined) {
      this.inputValue = this.type == EEbSelectType.pure ? value : value.name;
    }
    this.currentImage = value.img ? value.img : null;
    if (this.inputValue == '') value = null;
    this._value = value;
    this._onChange(value);
  }

  choose(value) {
    this.change(value);
  }

  activateItem(elem) {
    if (this.activeItemElement)
      this.activeItemElement.classList.remove('active');
    this.activeItemElement = elem;
    elem.classList.add('active');
  }

  actionButtonClicked(e: Event) {
    e.stopPropagation();
    this.actionClicked.emit();
  }

  getDisplayName(item) {
    return this.type == EEbSelectType.pure ? item : item.name;
  }
}
