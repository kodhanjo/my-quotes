import { Component, OnInit } from '@angular/core';
import { Quotes } from '../boiler/Quote';
import * as moment from 'moment';

@Component({
  selector: 'app-quotes-main',
  templateUrl: '../quotes-m/quotes.component.html',
  styleUrls: ['../quotes-m/quotes.component.css'],
})
export class QuotesMainComponent implements OnInit {
  quotesObj: { quote: string; author: string }[] = [
    {
      quote:
        'Life isn’t about getting and having, it’s about giving and being.',
      author: 'Kevin Kruse',
    },
    {
      quote:
        'Imagine Your Life Is Perfect In Every Respect; What Would It Look Like?',
      author: 'Brian Tracy',
    },
    {
      quote: 'We May Encounter Many Defeats But We Must Not Be Defeated.',
      author: 'Maya Angelou',
    },
    {
      quote:
        'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.',
      author: 'Robert Frost',
    },
    {
      quote: 'I attribute my success to this: I never gave or took any excuse.',
      author: 'Florence Nightingale',
    },
    {
      quote: 'We Generate Fears While We Sit. We Overcome Them By Action.',
      author: 'Dr. Henry Link',
    },
  ];
  quotes: Quotes[] = [];
  constructor() {
    this.quotesObj.map((element) =>
      this.quotes.push(
        new Quotes(
          'Kodhanjo O.',
          element.quote,
          element.author,
          moment('2008-10-10')
        )
      )
    );
  }
  currentScore: number;
  newScore: number;
  counter: number;
  votesOnlyArr: number[] = [];
  addNewQuote(emittedQuote): void {
    this.quotes.push(emittedQuote);
  }

  upvote(i: number): void {
    this.quotes[i].upvotes -= -1;
  }
  downvote(i: number): void {
    this.quotes[i].downvotes -= -1;
  }
  delQuote(i: number): void {
    this.quotes.splice(i, 1);
  }
  highestUpvote(): number {
    Math.max.apply(null, this.votesOnlyArr);
    this.currentScore = 0;
    this.newScore = 0;
    this.quotes.map((quote) => {
      const { upvotes } = quote;
      return this.votesOnlyArr.push(upvotes);
    });
    return Math.max(...this.votesOnlyArr);
  }

  ngOnInit(): void {}
}
