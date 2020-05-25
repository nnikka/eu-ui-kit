import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuAccordionBodyComponent } from './eu-accordion-body.component';

describe('EuAccordionBodyComponent', () => {
  let component: EuAccordionBodyComponent;
  let fixture: ComponentFixture<EuAccordionBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuAccordionBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuAccordionBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
