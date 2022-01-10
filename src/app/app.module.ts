import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BmiCalculatorFormComponent } from './forms/bmi-calculator-form/bmi-calculator-form.component';
import { BmiCalculatorContentComponent } from './bmi-calculator-content/bmi-calculator-content.component';
import { FridaeContentComponent } from './fridae-content/fridae-content.component';
import { RouterModule } from '@angular/router';
import { HomeContentComponent } from './home-content/home-content.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BmiCalculatorFormComponent,
    BmiCalculatorContentComponent,
    FridaeContentComponent,
    HomeContentComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    RouterModule.forRoot([
      { path: 'bmi', component: BmiCalculatorContentComponent },
      { path: 'fridae', component: FridaeContentComponent },
      { path: 'home', component: HomeContentComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
    ]),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
