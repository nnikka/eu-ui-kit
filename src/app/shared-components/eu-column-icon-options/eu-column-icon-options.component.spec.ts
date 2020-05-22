import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuColumnIconOptionsComponent } from './eu-column-icon-options.component';

describe('EuColumnIconOptionsComponent', () => {
  let component: EuColumnIconOptionsComponent;
  let fixture: ComponentFixture<EuColumnIconOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuColumnIconOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuColumnIconOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
