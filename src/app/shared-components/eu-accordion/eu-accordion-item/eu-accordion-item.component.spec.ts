import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuAccordionItemComponent } from './eu-accordion-item.component';

describe('EuAccordionItemComponent', () => {
  let component: EuAccordionItemComponent;
  let fixture: ComponentFixture<EuAccordionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuAccordionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuAccordionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
