import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEntComponent } from './new-ent.component';

describe('NewEntComponent', () => {
  let component: NewEntComponent;
  let fixture: ComponentFixture<NewEntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
