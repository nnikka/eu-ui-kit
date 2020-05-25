import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbAutocompleteComponent } from './eb-autocomplete.component';

describe('EbAutocompleteComponent', () => {
  let component: EbAutocompleteComponent;
  let fixture: ComponentFixture<EbAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
