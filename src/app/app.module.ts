import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BmiCalculatorFormComponent } from './forms/bmi-calculator-form/bmi-calculator-form.component';
import { BmiCalculatorContentComponent } from './bmi-calculator-content/bmi-calculator-content.component';
import { FridaeContentComponent } from './fridae-content/fridae-content.component';
import { RouterModule } from '@angular/router';
import { HomeContentComponent } from './home-content/home-content.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PlotAmountTableComponent } from './tables/plot-amount-table/plot-amount-table.component';
import { AddNetAssetsGraphFormComponent } from './forms/add-net-assets-graph-form/add-net-assets-graph-form.component';
import { QuikPassContentComponent } from './quik-pass-content/quik-pass-content.component';
import { QuikPassFormComponent } from './forms/quik-pass-form/quik-pass-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BmiCalculatorFormComponent,
    BmiCalculatorContentComponent,
    FridaeContentComponent,
    HomeContentComponent,
    NotFoundComponent,
    PlotAmountTableComponent,
    AddNetAssetsGraphFormComponent
    QuikPassContentComponent,
    QuikPassFormComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    RouterModule.forRoot([
      { path: 'bmi', component: BmiCalculatorContentComponent },
      { path: 'fridae', component: FridaeContentComponent },
      { path: 'home', component: HomeContentComponent },
      { path: 'password', component: QuikPassContentComponent},
      { path: 'not-found', component: NotFoundComponent},
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
    MatSlideToggleModule,
    MatRippleModule,
    MatButtonModule,
    MatTooltipModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
