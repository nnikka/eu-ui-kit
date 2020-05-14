import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuCheckboxComponent } from './eu-checkbox.component';

describe('EuCheckboxComponent', () => {
  let component: EuCheckboxComponent;
  let fixture: ComponentFixture<EuCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
