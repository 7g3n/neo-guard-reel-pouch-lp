import { SECTION_IDS } from '../../constants';
import { sizes } from '../../data/product';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import styles from './SizeTable.module.css';

export function SizeTable() {
  return (
    <section
      id={SECTION_IDS.size}
      className="section section--tint"
      aria-labelledby="sizetable-heading"
    >
      <div className="container">
        <SectionHeading
          eyebrow="SIZE CHART"
          title="サイズ比較表"
          id="sizetable-heading"
        />

        <table className={styles.table}>
          <caption className="visually-hidden">
            サイズごとの対応リールと推奨用途の比較表
          </caption>
          <thead>
            <tr>
              <th scope="col">サイズ</th>
              <th scope="col">対応例</th>
              <th scope="col">推奨用途</th>
            </tr>
          </thead>
          <tbody>
            {sizes.map((size) => (
              <tr key={size.code}>
                <th scope="row" data-label="サイズ" className={styles.sizeCell}>
                  <span className={styles.sizeBadge}>{size.label}</span>
                </th>
                <td data-label="対応例">{size.fit}</td>
                <td data-label="推奨用途">{size.use}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className={styles.note}>
          ※リールの形状によってフィット感が異なる場合があります。
        </p>
      </div>
    </section>
  );
}
