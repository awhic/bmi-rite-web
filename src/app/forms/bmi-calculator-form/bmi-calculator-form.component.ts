import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bmi-calculator-form',
  templateUrl: './bmi-calculator-form.component.html',
  styleUrls: ['./bmi-calculator-form.component.scss']
})
export class BmiCalculatorFormComponent implements OnInit {

  // if true, standard, else metric
  @Input() type!: boolean;

  weight!: number;

  height!: number;
  heightOverflow!: number;

  bmi!: string;

  actualHeight!: number;

  englishModifier = 703;
  calc!: number;

  metricModifier = 10000;
  metricCalculation!: number;
  
  weightText!: string;
  heightTextOne!: string;
  heightTextTwo = 'in';

  bmiForm!: FormGroup;


  constructor() { }

  ngOnInit(): void {

    this.bmiForm = new FormGroup({
      feet: new FormControl ({value: '', disabled: false}, [Validators.required, Validators.maxLength(2)]),
      inches: new FormControl ({value: '', disabled: false}),
      pounds: new FormControl ({value: '', disabled: false}, [Validators.required, Validators.maxLength(9)]),
      result: new FormControl ({value: '', disabled: true}),
    })

    if (this.type) {
      this.heightTextOne = 'ft';
      this.weightText = 'lbs';
      this.bmiForm.get('inches')?.setValidators([Validators.required, Validators.maxLength(2)]);
      this.bmiForm.updateValueAndValidity();
    } else {
      this.heightTextOne = 'cm';
      this.weightText = 'kg';
    }

    this.onChanges();
  }

  onChanges() {

  }

  calculateEnglish(collectedWeight: number, collectedHeight: number) {
    this.calc = 
      ((collectedWeight / collectedHeight / collectedHeight) * this.englishModifier);
  }

  calculateMetric(collectedWeight: number, collectedHeight: number) {
    this.calc = 
      ((collectedWeight / collectedHeight / collectedHeight) * this.metricModifier);
  }

  onSubmit() {
    if (this.type) {

      this.weight = this.bmiForm.get('pounds')?.value;
      this.height = this.bmiForm.get('feet')?.value;
      this.heightOverflow = this.bmiForm.get('inches')?.value;

      this.bmiForm.patchValue({
        feet: this.height,
        inches: this.heightOverflow,
        pounds: this.weight
      })

      this.actualHeight = (this.height * 12) + this.heightOverflow;

      this.calculateEnglish(this.weight, this.actualHeight);
    } else {

      this.weight = this.bmiForm.get('pounds')?.value;
      this.height = this.bmiForm.get('feet')?.value;

      this.bmiForm.patchValue({
        feet: this.height,
        pounds: this.weight
      })

      this.calculateMetric(this.weight, this.height);
    }
    this.bmi = this.calc.toFixed(1);
    this.bmiForm.patchValue({ result: this.bmi});
  }
}
