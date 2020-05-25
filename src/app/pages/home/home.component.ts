import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IEbColumnMenuItem } from '../../shared-components/eb-column-menu/eb-column-meu.schematics';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'ui-kit';
  myForm: FormGroup;
  errorMessages: any = {};
  columnMenuItems: IEbColumnMenuItem[] = [
    {
      key: 1,
      text: 'My account',
      iconClass: 'eu-icon-armchair',
      uri: '',
    },
    {
      key: 2,
      text: 'Options',
      iconClass: 'eu-icon-user',
      uri: 'inputs',
      label: 2,
    },
    {
      key: 3,
      text: 'Inputs',
      iconClass: 'eu-icon-armchair',
      uri: 'inputs',
      label: 'new',
    },
  ];
  columnMenuItems2: IEbColumnMenuItem[] = [
    {
      key: 1,
      text: 'My account',
      uri: '',
    },
    {
      key: 2,
      text: 'Options',
      uri: 'inputs',
      label: 2,
    },
    {
      key: 3,
      text: 'Inputs',
      uri: 'inputs',
      label: 'new',
    },
  ];
  rangeValue: any = {
    upperValue: 5000,
    lowerValue: 1000,
  };
  columnIconItems = [
    {
      id: 1,
      iconClass: 'eu-icon-user',
      label: 'Choose and add game',
      labelPosition: 'right',
    },
    {
      id: 3,
      iconClass: 'eu-icon-refresh',
      label: 'Choose and add game',
      labelPosition: 'right',
    },
    {
      id: 2,
      iconClass: 'eu-icon-search',
      label: 'Choose and add game',
      labelPosition: 'right',
    },
    {
      id: 2,
      iconClass: "eu-icon-sport",
      label: "Choose and add game",
      labelPosition: "right"
    }
  ];

  accordionItems = [
    {
      header: "Header",
      body: "Body text"
    },
    {
      header: "Header",
      body: "Body text"
    },
    {
      header: "Header",
      body: "Body text"
    },
    {
      header: "Header",
      body: "Body text"
    }
  ];

  mc(e) {
    console.log('from app');
  }

  get username() {
    return this.myForm.get('username');
  }

  get getRange() {
    return this.myForm.get('range1');
  }

  get getSlider() {
    return this.myForm.get('slider1');
  }

  get select() {
    return this.myForm.get('select1');
  }

  ngOnInit(): void {
    this.errorMessages = {
      required: 'Field is required',
      minlength: 'The number of characters should not be less than 2',
      min: 'The number should be greater',
      max: 'The number should be smaller',
      range: "C'moooon... U can do better",
    };

    this.myForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      email2: new FormControl(''),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
      ]),
      number: new FormControl(''),
      disabledUsername: new FormControl({ value: '', disabled: true }),
      password: new FormControl(''),
      password1: new FormControl(''),
      password2: new FormControl(''),
      password3: new FormControl(''),
      password4: new FormControl(''),
      password5: new FormControl(''),
      errorPassword: new FormControl(''),
      textarea1: new FormControl(''),
      textarea2: new FormControl(''),
      textarea3: new FormControl(''),

      checkbox1: new FormControl(true),
      checkbox2: new FormControl({ value: '', disabled: true }),
      checkbox3: new FormControl(''),
      checkbox4: new FormControl(false, [Validators.requiredTrue]),

      toggle1: new FormControl(true),
      toggle2: new FormControl({ value: '', disabled: true }),
      toggle3: new FormControl(''),
      toggle4: new FormControl(false, [Validators.requiredTrue]),

      slider1: new FormControl(1566655, [
        Validators.min(1000),
        Validators.max(5000),
      ]),

      range1: new FormControl({}),
      range2: new FormControl({}),
      range3: new FormControl(this.rangeValue, [this.rangeVialidationFn]),

      radio1: new FormControl('value1'),
      autocomplete1: new FormControl(null, [this.autocmpltVialidationFn]),
      select1: new FormControl({}, [this.autocmpltVialidationFn]),

    });
    this.myForm.get('checkbox4').markAsTouched();
    this.myForm.get('toggle4').markAsTouched();
    this.myForm.get('slider1').markAsTouched();
    this.myForm.get('range3').markAsTouched();
    this.myForm.get('autocomplete1').markAsTouched();
    this.myForm.get('select1').markAsTouched();
  }

  rangeVialidationFn(control: FormControl) {
    return {
      range: true,
    };
  }

  autocmpltVialidationFn(control: FormControl) {
    return {
      range: true,
    };
  }

  formsm() {
    console.log(this.myForm);
  }

  countries = [
    {
      name: 'Afghanistan',
      value: 'AF',
      img: 'https://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/Visa-icon.png'
    },
    {
      name: 'Albania',
      value: 'AL',
      img: 'https://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/Master-Card-Blue-icon.png'
    },
    {
      name: 'Algeria',
      value: 'DZ',
    },
    {
      name: 'American Samoa',
      value: 'AS',
      img: 'https://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/Visa-icon.png'
    },
    {
      name: 'Andorra',
      value: 'AD',
    },
    {
      name: 'Angola',
      value: 'AO',
      img: 'https://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/Master-Card-Blue-icon.png'
    },
    {
      name: 'Anguilla',
      value: 'AI',
      img: 'https://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/Visa-icon.png'
    },
    {
      name: 'Bntarctica',
      value: 'AQ',
      img: 'https://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/Master-Card-Blue-icon.png'
    },
    {
      name: 'Bntigua and Barbuda',
      value: 'AG',
    },
    {
      name: 'Krgentina',
      value: 'AR',
    },
    {
      name: 'Drmenia',
      value: 'AM',
    },
    {
      name: 'Druba',
      value: 'AW',
    },
    {
      name: 'Druba',
      value: 'DW',
    },
    {
      name: 'Eruba',
      value: 'EW',
    },
    {
      name: 'Erubo',
      value: 'ER',
    },
    {
      name: 'Fruba',
      value: 'FR',
    },
    {
      name: 'Gruba',
      value: 'GR',
    },
    {
      name: 'Hruba',
      value: 'HR',
    },
    {
      name: 'Iruba',
      value: 'IR',
    },
    {
      name: 'Jruba',
      value: 'JR',
    },
    {
      name: 'Kruba',
      value: 'KR',
    },
  ];
}
