import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuTooltipComponent } from './eu-tooltip.component';

describe('EuTooltipComponent', () => {
  let component: EuTooltipComponent;
  let fixture: ComponentFixture<EuTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
