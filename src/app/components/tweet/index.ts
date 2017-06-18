import { Component, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'tweet',
  templateUrl: 'index.html',
  styles: [`
    .media-subheading {
      color: gray;
      font-size: 14px;
    }
  `],
})
export class TweetComponent {
  @Input() author = '';
  @Input() handle = '';
  @Input() body = '';
  @Input() photo = '';
  @Input() likes = 0;
}
