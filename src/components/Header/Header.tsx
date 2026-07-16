import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SECTION_IDS } from '../../constants';
import { scrollToId } from '../../lib/scroll';
import styles from './Header.module.css';

interface NavLink {
  id: string;
  label: string;
}

const NAV_LINKS: NavLink[] = [
  { id: SECTION_IDS.features, label: '商品特徴' },
  { id: SECTION_IDS.size, label: 'サイズ' },
  { id: SECTION_IDS.howto, label: '使い方' },
  { id: SECTION_IDS.faq, label: 'FAQ' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // モバイルメニュー開放中は背景スクロールを止め、Escで閉じる。
  useEffect(() => {
    if (!menuOpen) return;

    document.body.classList.add('is-menu-open');
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.classList.remove('is-menu-open');
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    scrollToId(id);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a
          href="#top"
          className={styles.logo}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          NEO GUARD
        </a>

        <nav className={styles.desktopNav} aria-label="メインナビゲーション">
          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={styles.navLink}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.id);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className={styles.buyButton}
            onClick={() => handleNav(SECTION_IDS.purchase)}
          >
            購入する
          </button>
        </nav>

        <button
          type="button"
          ref={menuButtonRef}
          className={styles.menuToggle}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <X width={24} height={24} aria-hidden="true" />
          ) : (
            <Menu width={24} height={24} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* モバイルメニュー */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
        hidden={!menuOpen}
      >
        <nav aria-label="モバイルナビゲーション" className={styles.mobileNav}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={styles.mobileLink}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.id);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className={styles.mobileBuyButton}
            onClick={() => handleNav(SECTION_IDS.purchase)}
          >
            購入する
          </button>
        </nav>
      </div>

      {menuOpen && (
        <button
          type="button"
          className={styles.overlay}
          aria-label="メニューを閉じる"
          tabIndex={-1}
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}
