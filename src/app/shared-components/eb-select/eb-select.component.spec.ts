import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbSelectComponent } from './eb-select.component';

describe('EbSelectComponent', () => {
  let component: EbSelectComponent;
  let fixture: ComponentFixture<EbSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
