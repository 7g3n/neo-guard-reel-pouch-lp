import type { ColorOption, ProductData, SizeOption } from '../types';

export const colors: ColorOption[] = [
  { id: 'black', label: 'Black', swatch: '#1b1e22' },
  { id: 'navy', label: 'Navy', swatch: '#123047' },
  { id: 'sand', label: 'Sand', swatch: '#c8b18a' },
];

export const sizes: SizeOption[] = [
  {
    code: 'S',
    label: 'S',
    fit: 'ベイトリール',
    use: 'コンパクトな装備',
  },
  {
    code: 'M',
    label: 'M',
    fit: '小〜中型スピニングリール',
    use: 'バス釣り・エギング',
  },
  {
    code: 'L',
    label: 'L',
    fit: '中〜大型スピニングリール',
    use: 'シーバス・ショアジギング',
  },
];

export const product: ProductData = {
  name: 'NEO GUARD REEL POUCH',
  catchCopy: '大切なリールを、移動中の傷から守る。',
  subCopy:
    '厚みのあるネオプレーン素材が、釣行時の衝撃・擦れ・水しぶきを軽減。ロッドにリールを取り付けたまま、手軽に装着できます。',
  price: 1980,
  freeShippingThreshold: 3980,
  rating: 4.8,
  reviewCount: 128,
  colors,
  sizes,
};

export const formatYen = (value: number): string =>
  `${value.toLocaleString('ja-JP')}円`;
