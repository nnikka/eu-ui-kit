import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuTextareaComponent } from './eu-textarea.component';

describe('EuTextareaComponent', () => {
  let component: EuTextareaComponent;
  let fixture: ComponentFixture<EuTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
