import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BmiCalculatorFormComponent } from './forms/bmi-calculator-form/bmi-calculator-form.component';
import { BmiCalculatorContentComponent } from './bmi-calculator-content/bmi-calculator-content.component';

@NgModule({
  declarations: [
    AppComponent,
    BmiCalculatorFormComponent,
    BmiCalculatorContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
