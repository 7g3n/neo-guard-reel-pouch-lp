import { SECTION_IDS } from '../../constants';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import styles from './HowToUse.module.css';

const STEPS = [
  {
    number: 1,
    title: 'リールにポーチをかぶせる',
    image: '/images/step-1.svg',
    alt: 'リールの上からポーチをかぶせる手順の図解',
  },
  {
    number: 2,
    title: '固定ベルトを巻く',
    image: '/images/step-2.svg',
    alt: 'ポーチの固定ベルトを巻き付ける手順の図解',
  },
  {
    number: 3,
    title: '面ファスナーで固定する',
    image: '/images/step-3.svg',
    alt: '面ファスナーでベルトを固定する手順の図解',
  },
];

export function HowToUse() {
  return (
    <section
      id={SECTION_IDS.howto}
      className="section"
      aria-labelledby="howto-heading"
    >
      <div className="container">
        <SectionHeading
          eyebrow="HOW TO USE"
          title="使い方は3ステップ"
          align="center"
          id="howto-heading"
        />

        <ol className={styles.steps}>
          {STEPS.map((step) => (
            <li key={step.number} className={styles.step}>
              <div className={styles.mediaWrap}>
                <span className={styles.badge} aria-hidden="true">
                  {step.number}
                </span>
                <img
                  src={step.image}
                  width={480}
                  height={360}
                  alt={step.alt}
                  loading="lazy"
                  decoding="async"
                  className={styles.image}
                />
              </div>
              <p className={styles.title}>
                <span className={styles.stepLabel}>STEP {step.number}</span>
                {step.title}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
