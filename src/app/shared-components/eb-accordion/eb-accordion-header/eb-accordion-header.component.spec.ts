import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbAccordionHeaderComponent } from './eb-accordion-header.component';

describe('EbAccordionHeaderComponent', () => {
  let component: EbAccordionHeaderComponent;
  let fixture: ComponentFixture<EbAccordionHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbAccordionHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbAccordionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
