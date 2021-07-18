import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuotesMainComponent } from './quotes-m/quotes.component';
import { QuotesDetailsComponent } from './details/details.component';
import { QuotesAddComponent } from './add/add.component';
import { DateDifferencePipe } from './pipe/date-difference.pipe';
import { HighlighterDirective } from './directive/highlighter.directive';
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
