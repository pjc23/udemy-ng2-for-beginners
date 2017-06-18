export class TweetService {
  getTweets() : Object[] {
    return [
      {
        author: 'Donald Trump',
        handle: '@theRealDonaldTrump',
        photo: 'http://lorempixel.com/100/100/people?1123131',
        body: 'Despite the negative covfefe',
        likes: 3264,
      },
      {
        author: 'User 2',
        handle: '@user2',
        photo: 'http://lorempixel.com/100/100/people?zxczxz212',
        body: 'tweet content 2',
        likes: 9,
      },
      {
        author: 'User 3',
        handle: '@user3',
        photo: 'http://lorempixel.com/100/100/people?3adasd12321312',
        body: 'tweet content 3',
        likes: 0,
      },
    ];
  }
}
