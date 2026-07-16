import { SECTION_IDS } from '../../constants';
import { scrollToId } from '../../lib/scroll';
import styles from './Footer.module.css';

const LINKS = [
  { id: SECTION_IDS.features, label: '商品特徴' },
  { id: SECTION_IDS.size, label: 'サイズ' },
  { id: SECTION_IDS.faq, label: 'FAQ' },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandBlock}>
          <p className={styles.brand}>NEO GUARD</p>
          <p className={styles.tagline}>
            道具を大切に使う釣り人のための、リールプロテクション。
          </p>
        </div>

        <nav aria-label="フッターナビゲーション">
          <ul className={styles.links}>
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={styles.link}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId(link.id);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.disclaimer}>
          本ページはポートフォリオ制作を目的とした架空の商品LPです。実在の商品・ブランドとは関係ありません。
        </p>
        <p className={styles.copyright}>© 2026 NEO GUARD. Portfolio Concept.</p>
      </div>
    </footer>
  );
}
