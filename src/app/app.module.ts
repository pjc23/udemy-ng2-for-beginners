import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors.component';
import { StarComponent } from './star.component';
import { LikeComponent } from './like.component';
import { VoteComponent } from './vote.component';
import { TweetComponent } from './components/tweet/';
import { TweetListComponent } from './components/tweet-list/';

import { CourseService } from './course.service';
import { AuthorService } from './author.service';
import { TweetService } from './services/tweet';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    StarComponent,
    LikeComponent,
    VoteComponent,
    TweetComponent,
    TweetListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CourseService,
    AuthorService,
    TweetService,
  ],
  bootstrap: [AppComponent],
})

export class AppModule {}
