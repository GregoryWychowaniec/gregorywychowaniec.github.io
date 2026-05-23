export function getBlogSlug(post: { id: string }) {
  return post.id.replace(/\.mdx?$/, '').replace(/\/index$/, '');
}
