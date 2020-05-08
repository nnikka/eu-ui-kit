import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuButtonComponent } from './eu-button.component';

describe('EuButtonComponent', () => {
  let component: EuButtonComponent;
  let fixture: ComponentFixture<EuButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
