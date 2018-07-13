import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaptaskComponent } from './maptask.component';

describe('MaptaskComponent', () => {
  let component: MaptaskComponent;
  let fixture: ComponentFixture<MaptaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaptaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaptaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
