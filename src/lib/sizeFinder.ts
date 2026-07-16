import type { ReelType, SizeFinderResult } from '../types';

export interface SpinningSizeOption {
  id: 'sp-small' | 'sp-medium' | 'sp-large';
  label: string;
}

export interface BaitSizeOption {
  id: 'bc-compact' | 'bc-standard' | 'bc-large';
  label: string;
}

export const spinningSizes: SpinningSizeOption[] = [
  { id: 'sp-small', label: '1000〜2500番' },
  { id: 'sp-medium', label: '3000〜4000番' },
  { id: 'sp-large', label: '5000番以上' },
];

export const baitSizes: BaitSizeOption[] = [
  { id: 'bc-compact', label: 'コンパクト' },
  { id: 'bc-standard', label: '標準' },
  { id: 'bc-large', label: '大型' },
];

export type ReelSizeId = SpinningSizeOption['id'] | BaitSizeOption['id'];

/** 回答の組み合わせから、おすすめサイズと理由を返す。 */
export function resolveSize(
  reelType: ReelType,
  reelSize: ReelSizeId,
): SizeFinderResult {
  if (reelType === 'baitcasting') {
    if (reelSize === 'bc-large') {
      return {
        size: 'L',
        reason: '大型ベイトリールはボディに厚みがあるため、余裕をもって収まるLがおすすめです。',
      };
    }
    return {
      size: 'S',
      reason: 'コンパクト〜標準のベイトリールにフィットしやすいSサイズがおすすめです。',
    };
  }

  // spinning
  if (reelSize === 'sp-large') {
    return {
      size: 'L',
      reason: '5000番以上の大型スピニングリールをしっかり包めるLがおすすめです。',
    };
  }
  // 1000〜2500番 / 3000〜4000番
  return {
    size: 'M',
    reason: '小〜中型スピニングリールにバランスよくフィットするMサイズがおすすめです。',
  };
}
