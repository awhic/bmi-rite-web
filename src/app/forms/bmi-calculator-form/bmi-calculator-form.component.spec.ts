import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiCalculatorFormComponent } from './bmi-calculator-form.component';

describe('BmiCalculatorFormComponent', () => {
  let component: BmiCalculatorFormComponent;
  let fixture: ComponentFixture<BmiCalculatorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmiCalculatorFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmiCalculatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
