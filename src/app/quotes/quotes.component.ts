import { Component, HostListener, OnInit } from '@angular/core';
import { QUOTES } from "./quotes";
import { GetRandom } from "../utils";
import { transitionAnimation2 } from "../_animations/transition";

@Component({
  selector: 'quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
    animations: [transitionAnimation2], // It fixes bug with divs moving at the end of animation, no idea why ¯\_(ツ)_/¯
  host: {'[@transitionAnimation]': ''}
})
export class QuotesComponent implements OnInit {
  amount: number;
  quotes = [];
  positions = [['0%', '5%'], ['5%', '80%'], ['60%', '60%']];

  ngOnInit(): void {
    this.placeQuotes()
  }

  private placeQuotes(): void {
    this.amount = this.getAmount();
    let randomQuotes = new GetRandom(QUOTES);
    this.quotes = [];
    for (let i = 0; i < Math.min(this.amount, QUOTES.length); i++) {
      let quote = randomQuotes.next();
      quote.position = this.positions[i];
      this.quotes.push(quote)
    }
  }

  private getAmount(): number {
    return ((window.innerWidth > 1000) ? 3 : 2);
  }

  @HostListener('window:resize')
  onResize(): void {
    let amount = this.getAmount();
    if (amount != this.amount){
      this.placeQuotes();
    }
  }
}
