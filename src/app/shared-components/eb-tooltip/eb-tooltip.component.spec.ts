import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbTooltipComponent } from './eb-tooltip.component';

describe('EbTooltipComponent', () => {
  let component: EbTooltipComponent;
  let fixture: ComponentFixture<EbTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
