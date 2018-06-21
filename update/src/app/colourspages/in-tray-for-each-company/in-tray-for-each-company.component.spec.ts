import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InTrayForEachCompanyComponent } from './in-tray-for-each-company.component';

describe('InTrayForEachCompanyComponent', () => {
  let component: InTrayForEachCompanyComponent;
  let fixture: ComponentFixture<InTrayForEachCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InTrayForEachCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InTrayForEachCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
