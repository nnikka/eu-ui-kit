import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuSelectComponent } from './eu-select.component';

describe('EuSelectComponent', () => {
  let component: EuSelectComponent;
  let fixture: ComponentFixture<EuSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
