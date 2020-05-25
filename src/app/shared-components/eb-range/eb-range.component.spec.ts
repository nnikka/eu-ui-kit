import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbRangeComponent } from './eb-range.component';

describe('EbRangeComponent', () => {
  let component: EbRangeComponent;
  let fixture: ComponentFixture<EbRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
