import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuRadioComponent } from './eu-radio.component';

describe('EuRadioComponent', () => {
  let component: EuRadioComponent;
  let fixture: ComponentFixture<EuRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
