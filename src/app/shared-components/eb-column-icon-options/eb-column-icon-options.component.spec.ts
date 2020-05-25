import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbColumnIconOptionsComponent } from './eb-column-icon-options.component';

describe('EbColumnIconOptionsComponent', () => {
  let component: EbColumnIconOptionsComponent;
  let fixture: ComponentFixture<EbColumnIconOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbColumnIconOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbColumnIconOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
