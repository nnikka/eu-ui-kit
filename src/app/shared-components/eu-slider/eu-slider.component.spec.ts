import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuSliderComponent } from './eu-slider.component';

describe('EuSliderComponent', () => {
  let component: EuSliderComponent;
  let fixture: ComponentFixture<EuSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
