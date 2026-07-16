import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import styles from './BeforeAfter.module.css';

const ITEMS = [
  {
    tag: 'Before',
    variant: 'before' as const,
    image: '/images/before.svg',
    alt: 'タックルバッグの中でリールが直接ほかの道具と接触している使用前の状態',
    caption: 'バッグの中でリールが直接ほかの道具と接触している状態。',
  },
  {
    tag: 'After',
    variant: 'after' as const,
    image: '/images/after.svg',
    alt: 'ポーチでリールが個別に保護されている使用後の状態',
    caption: 'ポーチでリールが個別に保護されている状態。',
  },
];

export function BeforeAfter() {
  return (
    <section className="section" aria-labelledby="beforeafter-heading">
      <div className="container">
        <SectionHeading
          eyebrow="BEFORE / AFTER"
          title="使う前と使ったあと"
          align="center"
          id="beforeafter-heading"
        />
        <div className={styles.grid}>
          {ITEMS.map((item, index) => (
            <figure key={item.tag} className={styles.card}>
              <div className={styles.mediaWrap}>
                <span
                  className={`${styles.tag} ${styles[item.variant]}`}
                >
                  {item.tag}
                </span>
                <img
                  src={item.image}
                  width={600}
                  height={450}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className={styles.image}
                />
              </div>
              <figcaption className={styles.caption}>{item.caption}</figcaption>
              {index === 0 && (
                <span className={styles.arrow} aria-hidden="true">
                  <ArrowRight width={22} height={22} />
                </span>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
