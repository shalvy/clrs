import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InTrayForWholeProjectComponent } from './in-tray-for-whole-project.component';

describe('InTrayForWholeProjectComponent', () => {
  let component: InTrayForWholeProjectComponent;
  let fixture: ComponentFixture<InTrayForWholeProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InTrayForWholeProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InTrayForWholeProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
