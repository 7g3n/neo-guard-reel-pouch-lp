import { reviews } from '../../data/reviews';
import { product } from '../../data/product';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { StarRating } from '../StarRating/StarRating';
import styles from './Reviews.module.css';

export function Reviews() {
  return (
    <section id="reviews" className="section" aria-labelledby="reviews-heading">
      <div className="container">
        <SectionHeading
          eyebrow="REVIEWS"
          title="購入者のレビュー"
          description={`総合評価 ${product.rating.toFixed(1)} / 5（${product.reviewCount}件）`}
          id="reviews-heading"
        />

        <ul className={styles.grid}>
          {reviews.map((review) => (
            <li key={review.id} className={styles.card}>
              <div className={styles.head}>
                <StarRating value={review.rating} size={16} />
                <span className={styles.size}>購入サイズ: {review.purchasedSize}</span>
              </div>
              <p className={styles.body}>{review.body}</p>
              <p className={styles.name}>{review.name} さん</p>
            </li>
          ))}
        </ul>

        <p className={styles.note}>
          ※掲載しているレビューは、ポートフォリオ用に作成した架空の内容です。
        </p>
      </div>
    </section>
  );
}
