import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuToggleComponent } from './eu-toggle.component';

describe('EuToggleComponent', () => {
  let component: EuToggleComponent;
  let fixture: ComponentFixture<EuToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
