// Search engines truncate what they show. These limits are where Google starts
// cutting in practice, and Ahrefs flags anything past them.
//
// The brand suffix is appended by the `title.template` in the root layout, so a
// page's own title has TITLE_LIMIT - BRAND_SUFFIX.length characters to work with
// before the rendered <title> runs long.
export const BRAND_SUFFIX = ' | Fleetbase';
export const TITLE_LIMIT = 60;
export const DESCRIPTION_LIMIT = 155;

/**
 * Cut `text` to at most `limit` characters, breaking on a word boundary and
 * adding an ellipsis when anything was removed. Collapses whitespace first so
 * excerpts pulled out of HTML don't carry newlines into the meta tag.
 */
export function truncateAtWord(text: string, limit = DESCRIPTION_LIMIT) {
  const normalized = text.replace(/\s+/g, ' ').trim();

  if (normalized.length <= limit) {
    return normalized;
  }

  // Leave room for the ellipsis, then step back to the last space so we never
  // cut a word in half.
  const hardCut = normalized.slice(0, limit - 1);
  const lastSpace = hardCut.lastIndexOf(' ');
  const body = (lastSpace > limit * 0.6 ? hardCut.slice(0, lastSpace) : hardCut)
    // Trailing punctuation before an ellipsis reads as a typo.
    .replace(/[\s,;:.!?—–-]+$/, '');

  return `${body}…`;
}

/**
 * Blog headlines are written for readers, not for the 60-character budget, and
 * shortening them would damage the page. The plan's guidance is to drop the
 * brand suffix instead: return an `absolute` title, which tells Next.js to skip
 * the layout's template for this page only.
 */
export function titleWithinLimit(title: string) {
  return title.length + BRAND_SUFFIX.length > TITLE_LIMIT
    ? { absolute: title }
    : title;
}
