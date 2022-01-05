import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiCalculatorContentComponent } from './bmi-calculator-content.component';

describe('BmiCalculatorContentComponent', () => {
  let component: BmiCalculatorContentComponent;
  let fixture: ComponentFixture<BmiCalculatorContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmiCalculatorContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmiCalculatorContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
