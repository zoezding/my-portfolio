export interface ContentFrontmatter {
  title: string;
  description?: string;
}

export interface ContentData {
  frontmatter: ContentFrontmatter;
  content: string;
}

export interface SEOProps {
  title: string;
  description?: string;
  ogImage?: string;
  canonical?: string;
}