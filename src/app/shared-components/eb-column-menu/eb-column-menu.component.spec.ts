import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbColumnMenuComponent } from './eb-column-menu.component';

describe('EbColumnMenuComponent', () => {
  let component: EbColumnMenuComponent;
  let fixture: ComponentFixture<EbColumnMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbColumnMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbColumnMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
