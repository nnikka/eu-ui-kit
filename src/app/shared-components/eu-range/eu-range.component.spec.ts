import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuRangeComponent } from './eu-range.component';

describe('EuRangeComponent', () => {
  let component: EuRangeComponent;
  let fixture: ComponentFixture<EuRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
