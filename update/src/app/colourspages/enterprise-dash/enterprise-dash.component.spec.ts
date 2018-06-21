import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseDashComponent } from './enterprise-dash.component';

describe('EnterpriseDashComponent', () => {
  let component: EnterpriseDashComponent;
  let fixture: ComponentFixture<EnterpriseDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
