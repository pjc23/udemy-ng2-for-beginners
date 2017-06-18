import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Sample ng2 App';

  post = {
    voteCount: 10,
    myVote: 1
  };

  onVote($event) {
    console.log($event);
  }
}
