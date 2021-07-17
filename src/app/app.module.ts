import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes-m/quotes.component';
import { PlatesComponent } from './plates/plates.component';
import { DetailsComponent } from './details/details.component';
import { AddComponent } from './add/add.component';
import { PlatesDirective } from './directive/plates.directive';
import { HighlighterDirective } from './directive/highlighter.directive';
import { DateDifferencePipe } from './pipe/date-difference.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    PlatesComponent,
    DetailsComponent,
    AddComponent,
    PlatesDirective,
    HighlighterDirective,
    DateDifferencePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuotesMainComponent } from './quotes-main/quotes-main.component';
import { QuotesDetailsComponent } from './quotes-details/quotes-details.component';
import { QuotesAddComponent } from './quotes-add/quotes-add.component';
import { DateDifferencePipe } from './Pipes/DateDifference/date-difference.pipe';
import { HighlighterDirective } from './Directives/Highlighter/highlighter.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    QuotesMainComponent,
    QuotesDetailsComponent,
    QuotesAddComponent,
    DateDifferencePipe,
    HighlighterDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

export class AppModule { }
