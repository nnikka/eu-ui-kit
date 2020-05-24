import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuAccordionComponent } from './eu-accordion.component';

describe('EuAccordionComponent', () => {
  let component: EuAccordionComponent;
  let fixture: ComponentFixture<EuAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
