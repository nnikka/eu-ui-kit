import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuLabelComponent } from './eu-label.component';

describe('EuLabelComponent', () => {
  let component: EuLabelComponent;
  let fixture: ComponentFixture<EuLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
