import { Component } from '@angular/core';
import { AuthorService } from './author.service';

@Component({
  selector: 'authors',
  template: `
    <h2>{{title}}</h2>
    <ul>
      <li *ngFor="let author of authors">{{author}}</li>
    </ul>
  `,
})
export class AuthorsComponent {
  title: string = 'Available authors: ';
  authors;

  constructor(authorService: AuthorService) {
    this.authors = authorService.getAuthors();
  }
}
