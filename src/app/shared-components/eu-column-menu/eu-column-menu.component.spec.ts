import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuColumnMenuComponent } from './eu-column-menu.component';

describe('EuColumnMenuComponent', () => {
  let component: EuColumnMenuComponent;
  let fixture: ComponentFixture<EuColumnMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuColumnMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuColumnMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
