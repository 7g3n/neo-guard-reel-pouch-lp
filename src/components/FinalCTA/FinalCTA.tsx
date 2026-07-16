import { SECTION_IDS } from '../../constants';
import { scrollToId } from '../../lib/scroll';
import styles from './FinalCTA.module.css';

export function FinalCTA() {
  return (
    <section className={styles.section} aria-labelledby="finalcta-heading">
      <div className="container">
        <div className={styles.inner}>
          <h2 id="finalcta-heading" className={styles.heading}>
            次の釣行でも、大切なリールを安心して持ち運ぶ。
          </h2>
          <button
            type="button"
            className={styles.cta}
            onClick={() => scrollToId(SECTION_IDS.purchase)}
          >
            サイズを選んで購入する
          </button>
        </div>
      </div>
    </section>
  );
}
