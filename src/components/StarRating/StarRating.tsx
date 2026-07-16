import { Star } from 'lucide-react';
import styles from './StarRating.module.css';

interface StarRatingProps {
  /** 0〜5 の評価値。 */
  value: number;
  /** アクセシブルなラベル用の追加テキスト（例: レビュー件数）。 */
  labelSuffix?: string;
  size?: number;
}

export function StarRating({ value, labelSuffix, size = 18 }: StarRatingProps) {
  const rounded = Math.round(value);
  const label = labelSuffix
    ? `5点満点中 ${value} 点、${labelSuffix}`
    : `5点満点中 ${value} 点`;

  return (
    <span className={styles.stars} role="img" aria-label={label}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          width={size}
          height={size}
          aria-hidden="true"
          className={i < rounded ? styles.filled : styles.empty}
          fill={i < rounded ? 'currentColor' : 'none'}
          strokeWidth={1.5}
        />
      ))}
    </span>
  );
}
