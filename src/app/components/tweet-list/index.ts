import { Component, Input, EventEmitter } from '@angular/core';
import { TweetService } from './../../services/tweet';

@Component({
  selector: 'tweets',
  templateUrl: 'index.html',
  styles: [`
    .TweetList-TweetItem {
      list-style-type: none;
      margin-bottom: 10px;
    }
  `],
})
export class TweetListComponent {
  tweets = [];

  constructor(tweetService: TweetService) {
    this.tweets = tweetService.getTweets();
    console.log(this.tweets);
  }
}
