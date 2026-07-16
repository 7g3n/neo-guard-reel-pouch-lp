import { useEffect, useState } from 'react';
import { formatYen, product } from '../../data/product';
import { SECTION_IDS } from '../../constants';
import { scrollToId } from '../../lib/scroll';
import { trackEvent } from '../../lib/analytics';
import styles from './MobileStickyCTA.module.css';

export function MobileStickyCTA() {
  const [passedHero, setPassedHero] = useState(false);
  const [purchaseVisible, setPurchaseVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('hero');
    const purchase = document.getElementById(SECTION_IDS.purchase);

    // ファーストビュー（Hero）を通過したかどうか
    const heroObserver = hero
      ? new IntersectionObserver(
          ([entry]) => setPassedHero(!entry.isIntersecting),
          { threshold: 0 },
        )
      : null;
    heroObserver?.observe(hero as Element);

    // 購入エリアが見えている間は固定CTAを隠す
    const purchaseObserver = purchase
      ? new IntersectionObserver(
          ([entry]) => setPurchaseVisible(entry.isIntersecting),
          { threshold: 0 },
        )
      : null;
    purchaseObserver?.observe(purchase as Element);

    return () => {
      heroObserver?.disconnect();
      purchaseObserver?.disconnect();
    };
  }, []);

  const show = passedHero && !purchaseVisible;

  // 表示中はページ内容が隠れないよう body 下部に余白を追加
  useEffect(() => {
    document.body.classList.toggle('has-sticky-cta', show);
    return () => document.body.classList.remove('has-sticky-cta');
  }, [show]);

  const handleClick = () => {
    trackEvent('sticky_cta_click');
    scrollToId(SECTION_IDS.purchase);
  };

  return (
    <div
      className={`${styles.bar} ${show ? styles.visible : ''}`}
      aria-hidden={!show}
    >
      <div className={styles.inner}>
        <div className={styles.priceBlock}>
          <span className={styles.price}>{formatYen(product.price)}</span>
          <span className={styles.tax}>税込</span>
        </div>
        <button
          type="button"
          className={styles.button}
          onClick={handleClick}
          tabIndex={show ? 0 : -1}
        >
          購入する
        </button>
      </div>
    </div>
  );
}
