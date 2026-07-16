import { Package, Car, CloudRain, Box } from 'lucide-react';
import { SECTION_IDS } from '../../constants';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import styles from './ProblemSection.module.css';

const PROBLEMS = [
  { icon: Package, text: 'タックルバッグの中でリール同士がぶつかる' },
  { icon: Car, text: '車での移動中に細かな傷が付く' },
  { icon: CloudRain, text: '雨や水しぶきが気になる' },
  { icon: Box, text: 'ハードケースはかさばって持ち運びにくい' },
];

export function ProblemSection() {
  return (
    <section
      id={SECTION_IDS.problems}
      className="section"
      aria-labelledby="problem-heading"
    >
      <div className="container">
        <SectionHeading
          eyebrow="CONCERNS"
          title="釣行中、こんな経験はありませんか？"
          align="center"
          id="problem-heading"
        />
        <ul className={styles.grid}>
          {PROBLEMS.map(({ icon: Icon, text }) => (
            <li key={text} className={styles.item}>
              <span className={styles.icon} aria-hidden="true">
                <Icon width={24} height={24} />
              </span>
              <p className={styles.text}>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
