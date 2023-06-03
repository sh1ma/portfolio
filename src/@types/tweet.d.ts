declare type TweetCategory = "Introduction" | "Career" | "Skills" | "Works";

declare interface Tweet {
  text: string;
  category: TweetCategory;
  date?: string;
  extraUrls?: string[];
}

declare module "tweets.json" {
  const data: {
    data: {
      name: string;
      userId: string;
      tweets: Tweet[];
    };
  };
}
