import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../data/site';
import { getBlogSlug } from '../utils/blog';

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: 'Blog technique de Grégory Wychowaniec',
    description: 'Journal d\'expériences sur la cybersécurité, l\'automatisation et l\'IA.',
    site: context.site ?? site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${getBlogSlug(post)}`,
      categories: post.data.tags,
    })),
  });
}
