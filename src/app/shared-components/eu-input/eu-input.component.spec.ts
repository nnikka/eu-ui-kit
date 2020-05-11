import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuInputComponent } from './eu-input.component';

describe('EuInputComponent', () => {
  let component: EuInputComponent;
  let fixture: ComponentFixture<EuInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
