import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbRadioComponent } from './eb-radio.component';

describe('EbRadioComponent', () => {
  let component: EbRadioComponent;
  let fixture: ComponentFixture<EbRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
