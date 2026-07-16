/** ページ内アンカーで共有するセクションID。 */
export const SECTION_IDS = {
  features: 'features',
  size: 'size',
  howto: 'howto',
  faq: 'faq',
  purchase: 'purchase',
  problems: 'problems',
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];
