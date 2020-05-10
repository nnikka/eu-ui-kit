import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuIconComponent } from './eu-icon.component';

describe('EuIconComponent', () => {
  let component: EuIconComponent;
  let fixture: ComponentFixture<EuIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
