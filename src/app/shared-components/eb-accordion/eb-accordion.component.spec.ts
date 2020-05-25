import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbAccordionComponent } from './eb-accordion.component';

describe('EbAccordionComponent', () => {
  let component: EbAccordionComponent;
  let fixture: ComponentFixture<EbAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
