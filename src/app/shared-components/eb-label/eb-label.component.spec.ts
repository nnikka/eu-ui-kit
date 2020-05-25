import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbLabelComponent } from './eb-label.component';

describe('EbLabelComponent', () => {
  let component: EbLabelComponent;
  let fixture: ComponentFixture<EbLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
