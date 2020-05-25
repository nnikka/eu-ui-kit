import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuAccordionHeaderComponent } from './eu-accordion-header.component';

describe('EuAccordionHeaderComponent', () => {
  let component: EuAccordionHeaderComponent;
  let fixture: ComponentFixture<EuAccordionHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuAccordionHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuAccordionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
