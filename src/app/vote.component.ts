import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'vote',
  template: `
    <div class="voteContainer">
      <i class="voteBtn upvoteBtn glyphicon glyphicon-menu-up"
        [class.highlighted]="voteDirection > 0"
        (click)="onUpvote()"></i>
      <span>{{numVotes}}</span>
      <i class="voteBtn downvoteBtn glyphicon glyphicon-menu-down"
        [class.highlighted]="voteDirection < 0"
        (click)="onDownvote()"></i>
    </div>
  `,
  styles: [`
    .voteContainer {
      width: 20px;
      text-align: center;
      color: #999;
    }

    .voteBtn {
      cursor: pointer;
    }

    .voteBtn.highlighted {
      color: orange;
    }
  `],
})
export class VoteComponent {
  @Input("voteCount") numVotes = 0;
  isUpvoted = false;
  isDownvoted = false;
  @Input("myVote") voteDirection = 0;

  @Output() vote = new EventEmitter();

  onUpvote() {
    if (this.voteDirection > 0) {
      return;
    }

    this.numVotes++;
    this.voteDirection++;
    this.vote.emit({ myVote: this.voteDirection });
  }

  onDownvote() {
    if (this.voteDirection < 0) {
      return;
    }

    this.numVotes--;
    this.voteDirection--;
    this.vote.emit({ myVote: this.voteDirection });
  }
}
