import { Component, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  template: `
    <i class="likeBtn glyphicon glyphicon-heart"
      [class.highlighted]="isLiked"
      (click)="onClick()">
    </i>
    <label>{{likeCounter}}</label>
  `,
  styles: [`
    .likeBtn {
      color: #ccc;
      cursor: pointer;
    }

    .likeBtn.highlighted {
      color: deeppink;
    }
  `],
})
export class LikeComponent {
  @Input() isLiked = false;
  @Input() likeCounter = 10;

  change = new EventEmitter();

  onClick() {
    this.isLiked = !this.isLiked;

    if (this.isLiked) {
      this.likeCounter++;
    } else {
      this.likeCounter--;
    }
  }
}
