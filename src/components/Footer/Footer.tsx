import { Github } from 'lucide-react';
import { SECTION_IDS } from '../../constants';
import { scrollToId } from '../../lib/scroll';
import styles from './Footer.module.css';

const PORTFOLIO_URL = 'https://7g3.net/';
const REPO_URL = 'https://github.com/7g3n/neo-guard-reel-pouch-lp';

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
          本ページは、釣具ECサイトを想定して制作したポートフォリオ作品です。商品・ブランドは架空のもので、実際の販売・決済は行いません。
        </p>

        <div className={styles.credits}>
          <p className={styles.author}>
            Designed &amp; Developed by{' '}
            <a
              href={PORTFOLIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.authorLink}
            >
              Nagisa Dozono
            </a>
          </p>
          <p className={styles.stack}>React / TypeScript / Vite</p>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.repoLink}
          >
            <Github width={16} height={16} aria-hidden="true" />
            GitHub リポジトリを見る
          </a>
        </div>

        <p className={styles.copyright}>© 2026 NEO GUARD. Portfolio Concept.</p>
      </div>
    </footer>
  );
}
