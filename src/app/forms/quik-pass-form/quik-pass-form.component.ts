import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-quik-pass-form',
  templateUrl: './quik-pass-form.component.html',
  styleUrls: ['./quik-pass-form.component.scss']
})
export class QuikPassFormComponent implements OnInit {

  length!: number;
  specSelect = false;
  specialChars!: any;

  output!: string;
  outputBlank = true;

  passForm!: FormGroup;

  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {

    this.passForm = new FormGroup({
      length: new FormControl ({value: '', disabled: false}, [Validators.required, Validators.max(99), Validators.min(4)]),
      specialChars: new FormControl({value: this.specSelect, disabled: false}),
      result: new FormControl ({value: this.output, disabled: true}),
    })
  }

  generatePass(length: number, specSelect: boolean) {

    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";

    if (specSelect) {
      this.specialChars = "!@#$%^&*.";
    } else {
      this.specialChars = "";
    }

    var numbers = "1234567890";

    var allTypesConcat = upperCase + lowerCase + this.specialChars + numbers;
    var random = Array(length);

    random[0] = upperCase;
    random[1] = lowerCase;
    random[2] = this.specialChars;
    random[3] = numbers;

    random = random.fill(allTypesConcat, 3);

    return this.randomizeArray(random.map(
      function(x: any[]) {
        return x[Math.floor(Math.random() * x.length)] 
      }
    )).join('');
  }

  randomizeArray(array: any) {

    for (var i = array.length - 1; i > 0; i--) {
      var y = Math.floor(Math.random() * (i +1));
      var trans = array[i];
      array[i] = array[y];
      array[y] = trans;
    }
    return array;
  }

  updateSelect() {
    if (this.specSelect) {
      this.specSelect = false;
    } else {
      this.specSelect = true;
    }
  }

  onSubmit() {

    this.length = this.passForm.get('length')?.value;

    this.output = this.generatePass(this.length, this.specSelect);

    if (this.outputBlank && this.output != "") {
      this.outputBlank = false;
    }

    this.passForm.patchValue({
      length: this.length,
      specialChars: this.specSelect,
      result: this.output
    })
  }

  copyToClipboard() {
    if (!this.outputBlank) {
      navigator.clipboard.writeText(this.output.toString());
      this._snackBar.openFromComponent(CopyClipboardSnackBarComponent, {
        duration: 5000,
        verticalPosition: 'top',
        panelClass: 'notif-success'
      });
    }
  }
}

@Component({
  selector: 'app-cc-snack-bar-component',
  templateUrl: 'cc-snack-bar-component.html'
})
export class CopyClipboardSnackBarComponent {}
