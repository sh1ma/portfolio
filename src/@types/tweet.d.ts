declare type TweetCategory = "Introduction" | "Career" | "Skill" | "Works";

declare interface Tweet {
  text: string;
  category: TweetCategory;
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
