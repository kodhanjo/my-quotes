import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
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
})
export class AppModule { }
