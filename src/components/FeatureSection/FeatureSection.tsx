import { features } from '../../data/features';
import { SECTION_IDS } from '../../constants';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import styles from './FeatureSection.module.css';

export function FeatureSection() {
  return (
    <section
      id={SECTION_IDS.features}
      className="section section--tint"
      aria-labelledby="feature-heading"
    >
      <div className="container">
        <SectionHeading
          eyebrow="FEATURES"
          title="3つの特徴"
          description="道具を大切に使う釣り人のために、必要な保護性能を実用的にまとめました。"
          id="feature-heading"
        />

        <div className={styles.list}>
          {features.map((feature) => (
            <article key={feature.id} className={styles.row}>
              <div className={styles.media}>
                <img
                  src={feature.image}
                  width={600}
                  height={450}
                  alt={feature.alt}
                  loading="lazy"
                  decoding="async"
                  className={styles.image}
                />
              </div>
              <div className={styles.body}>
                <span className={styles.number} aria-hidden="true">
                  {feature.number}
                </span>
                <h3 className={styles.title}>{feature.title}</h3>
                <p className={styles.text}>{feature.body}</p>
                {feature.note && <p className={styles.note}>{feature.note}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
