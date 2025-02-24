import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinechartComponent } from './linechart.component';

describe('LinechartcomponentComponent', () => {
  let component: LinechartComponent;
  let fixture: ComponentFixture<LinechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
