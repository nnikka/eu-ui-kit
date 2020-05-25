import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbCheckboxComponent } from './eb-checkbox.component';

describe('EbCheckboxComponent', () => {
  let component: EbCheckboxComponent;
  let fixture: ComponentFixture<EbCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
