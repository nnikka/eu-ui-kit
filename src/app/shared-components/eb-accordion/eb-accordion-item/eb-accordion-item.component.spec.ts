import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbAccordionItemComponent } from './eb-accordion-item.component';

describe('EbAccordionItemComponent', () => {
  let component: EbAccordionItemComponent;
  let fixture: ComponentFixture<EbAccordionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbAccordionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbAccordionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
