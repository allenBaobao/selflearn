import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoBarChartComponent } from './tuto-bar-chart.component';

describe('TutoBarChartComponent', () => {
  let component: TutoBarChartComponent;
  let fixture: ComponentFixture<TutoBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutoBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutoBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
