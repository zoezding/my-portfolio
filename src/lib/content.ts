import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import { ContentData, ContentFrontmatter } from '@/types/content';

const contentDirectory = path.join(process.cwd(), 'content');

export async function getContentData(filepath: string): Promise<ContentData> {
  const fullPath = path.join(contentDirectory, filepath);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  const { data, content } = matter(fileContents);
  
  const processedContent = await remark()
    .use(remarkHtml)
    .process(content);
    
  return {
    frontmatter: data as ContentFrontmatter,
    content: processedContent.toString(),
  };
}

export async function getShortDescription(): Promise<ContentData> {
  return getContentData('about/short-description.md');
}

export async function getLongDescription(): Promise<ContentData> {
  return getContentData('about/long-description.md');
}