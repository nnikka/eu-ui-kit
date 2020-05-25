import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbTextareaComponent } from './eb-textarea.component';

describe('EbTextareaComponent', () => {
  let component: EbTextareaComponent;
  let fixture: ComponentFixture<EbTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
