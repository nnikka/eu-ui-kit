import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbButtonComponent } from './eb-button.component';

describe('EbButtonComponent', () => {
  let component: EbButtonComponent;
  let fixture: ComponentFixture<EbButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
