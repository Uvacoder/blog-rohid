export interface PostFrontmatter {
  title: string;
  description: string;
  coverImage: string;
  pubDate: string;
  readingTime: string;
  draft?: boolean;
  featured?: boolean;
}
