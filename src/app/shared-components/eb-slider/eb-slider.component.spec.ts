import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbSliderComponent } from './eb-slider.component';

describe('EbSliderComponent', () => {
  let component: EbSliderComponent;
  let fixture: ComponentFixture<EbSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
