export function filterContent(excerpt: string): string {
  if (excerpt.length > 100) {
    return excerpt.substring(0, 100) + '...';
  }
  return excerpt;
}
