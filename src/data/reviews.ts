import type { Review } from '../types';

export const reviews: Review[] = [
  {
    id: 'r1',
    name: 'T.K',
    rating: 5,
    purchasedSize: 'M',
    body: 'バッグに何本もリールを入れて運ぶので、これまでは擦り傷が気になっていました。ポーチに入れてからはリール同士が当たらなくなり、安心して持ち運べています。',
  },
  {
    id: 'r2',
    name: 'H.S',
    rating: 4,
    purchasedSize: 'L',
    body: '装着は思っていたより簡単でした。ロッドに付けたままかぶせられるのが便利です。生地はしっかりしていますが、大型リールだと少しきつめなので、迷ったら大きいサイズが良いかもしれません。',
  },
  {
    id: 'r3',
    name: 'Y.M',
    rating: 4,
    purchasedSize: 'S',
    body: '完全防水ではないので小雨のときは過信しない方がいいですが、移動中の保護としては十分でした。小物のベイトリールにぴったりで、収まりが良いです。',
  },
];
