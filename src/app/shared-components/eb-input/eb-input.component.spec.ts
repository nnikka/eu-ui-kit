import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbInputComponent } from './eb-input.component';

describe('EbInputComponent', () => {
  let component: EbInputComponent;
  let fixture: ComponentFixture<EbInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
