import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuAutocompleteComponent } from './eu-autocomplete.component';

describe('EuAutocompleteComponent', () => {
  let component: EuAutocompleteComponent;
  let fixture: ComponentFixture<EuAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
