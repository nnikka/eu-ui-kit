import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbToggleComponent } from './eb-toggle.component';

describe('EbToggleComponent', () => {
  let component: EbToggleComponent;
  let fixture: ComponentFixture<EbToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
