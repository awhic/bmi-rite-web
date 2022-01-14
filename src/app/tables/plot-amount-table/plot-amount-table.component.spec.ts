import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotAmountTableComponent } from './plot-amount-table.component';

describe('PlotAmountTableComponent', () => {
  let component: PlotAmountTableComponent;
  let fixture: ComponentFixture<PlotAmountTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlotAmountTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotAmountTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
