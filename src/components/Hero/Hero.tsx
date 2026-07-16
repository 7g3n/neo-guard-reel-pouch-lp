import { ShieldCheck, Droplets, Zap } from 'lucide-react';
import { product, formatYen } from '../../data/product';
import { SECTION_IDS } from '../../constants';
import { scrollToId } from '../../lib/scroll';
import { trackEvent } from '../../lib/analytics';
import { StarRating } from '../StarRating/StarRating';
import styles from './Hero.module.css';

const BADGES = [
  { icon: ShieldCheck, label: '耐衝撃' },
  { icon: Droplets, label: '耐水' },
  { icon: Zap, label: '簡単装着' },
];

export function Hero() {
  const handlePrimary = () => {
    trackEvent('hero_cta_click', { target: 'purchase' });
    scrollToId(SECTION_IDS.purchase);
  };

  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-heading">
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <p className={styles.category}>REEL PROTECTION</p>
          <h1 id="hero-heading" className={styles.catch}>
            {product.catchCopy}
          </h1>
          <p className={styles.sub}>{product.subCopy}</p>

          <div className={styles.priceRow}>
            <span className={styles.price}>{formatYen(product.price)}</span>
            <span className={styles.tax}>（税込）</span>
            <span className={styles.shipping}>
              {formatYen(product.freeShippingThreshold)}以上で送料無料
            </span>
          </div>

          <div className={styles.ratingRow}>
            <StarRating
              value={product.rating}
              labelSuffix={`${product.reviewCount}件のレビュー`}
            />
            <span className={styles.ratingValue}>{product.rating.toFixed(1)} / 5</span>
            <span className={styles.reviewCount}>{product.reviewCount}件のレビュー</span>
          </div>

          <div className={styles.actions}>
            <button type="button" className={styles.primaryCta} onClick={handlePrimary}>
              サイズを選んで購入する
            </button>
            <button
              type="button"
              className={styles.secondaryCta}
              onClick={() => scrollToId(SECTION_IDS.features)}
            >
              商品の特徴を見る
            </button>
          </div>

          <ul className={styles.badges}>
            {BADGES.map(({ icon: Icon, label }) => (
              <li key={label} className={styles.badge}>
                <Icon width={18} height={18} aria-hidden="true" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.visual}>
          <img
            src="/images/hero-main.svg"
            width={800}
            height={600}
            alt="ロッドに取り付けたリールへNEO GUARD REEL POUCHを装着した状態のメインビジュアル"
            className={styles.visualImg}
            /* ファーストビューのため eager 読み込み */
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
