import type { Feature } from '../types';

export const features: Feature[] = [
  {
    id: 'shock',
    number: '01',
    title: '衝撃をやわらげる',
    body: '厚みのあるネオプレーン素材が、移動時の衝撃や擦れを軽減します。タックルバッグの中でも、リール同士が直接ぶつかりにくくなります。',
    image: '/images/feature-shock.svg',
    alt: 'ネオプレーン素材の断面イメージ。厚みのあるクッション層がリールを包み込んでいる様子',
  },
  {
    id: 'water',
    number: '02',
    title: '水しぶきに強い',
    body: '釣り場での雨や水しぶきから、大切なリールを保護します。',
    note: '※完全防水ではありません。水中での使用や長時間の浸水はお避けください。',
    image: '/images/feature-water.svg',
    alt: 'ポーチ表面で水滴がはじかれているイメージ',
  },
  {
    id: 'easy',
    number: '03',
    title: '装着が簡単',
    body: 'ロッドにリールを取り付けた状態でも、ポーチをかぶせてベルトで固定できます。釣行の合間でもすばやく着脱できます。',
    image: '/images/feature-easy.svg',
    alt: 'ロッドに取り付けたリールへポーチをかぶせている装着イメージ',
  },
];
