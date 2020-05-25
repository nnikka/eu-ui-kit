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
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { EEuAutocompleteType } from './eu-autocomplete.schematics'

@Component({
  selector: 'app-eu-autocomplete',
  templateUrl: './eu-autocomplete.component.html',
  styleUrls: ['./eu-autocomplete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class EuAutocompleteComponent implements OnInit {
  @Input() prefixIcon: string;
  @Input() suffixIcon: string;
  @Input() label: string;
  @Input() width: number = null;
  @Input() items: Array<any> = [];
  @Input() myItems: Array<any> = [];
  @Input() type: string = EEuAutocompleteType.default;
  @Input() minHeight: "auto" | number = 75;
  @Input() placeHolder: string = "";
  @Input() errorMessages: any = {};
  @Input() clearable: boolean = false;

  @HostBinding('style.width') hostElementWidth = '100%';
  @HostBinding('style.display') hostElementDisplay = 'inline-block';

  @ViewChild('options', { read: ElementRef }) options: ElementRef;

  focused: boolean = false;
  inputValue: any;
  showDropdown: boolean = true;

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

  ngOnInit(): void {
    if (this.width) {
      this.hostElementDisplay = 'inline-block';
      this.hostElementWidth = this.width + 'px';
    }
    this.myItems = [...this.items];
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
    return this.focused ? '' : 'eu-acmplt-hidden';
  }

  get inputAutocmpltStyle(): object {
    let styleObj = {};
    if (this.minHeight !== "auto") {
      styleObj['min-height'] = this.minHeight + "px";
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

  set ngInputValue(value: any) {
    if(this.type == EEuAutocompleteType.pure) {
      this._value = value;
      this.change(value)
    } else {
      if (value) {
        const filtered = this.items.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));
        const chosenItem = this.items.find((item) => item.name.toLowerCase() == value.toLowerCase());
        this.myItems = [...filtered];
        this.showDropdown = !!this.myItems.length;
        if(chosenItem) this.change(chosenItem)
        else this.change(null);
      } else {
        this.myItems = [...this.items];
        this.showDropdown = !!this.myItems.length;
        this.change(null);
      }
      this.inputValue = value;
    }
  }

  get ngInputValue() {
    return this.inputValue;
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
    // this.disabled = isDisabled;
  }

  change(value) {
    if(value) this.inputValue = this.type == EEuAutocompleteType.pure ? value : value.name;
    this._value = value;
    this._onChange(value);
  }

  choose(value) {
    this.change(value);
  }

  getDisplayName(item) {
    return this.type == EEuAutocompleteType.pure ? item : item.name;
  }
}
