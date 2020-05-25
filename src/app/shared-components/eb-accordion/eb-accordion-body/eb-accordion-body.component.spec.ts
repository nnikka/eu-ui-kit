import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbAccordionBodyComponent } from './eb-accordion-body.component';

describe('EbAccordionBodyComponent', () => {
  let component: EbAccordionBodyComponent;
  let fixture: ComponentFixture<EbAccordionBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbAccordionBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbAccordionBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
