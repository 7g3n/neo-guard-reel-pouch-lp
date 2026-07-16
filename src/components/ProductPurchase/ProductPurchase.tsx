import { useEffect, useRef, useState } from 'react';
import {
  ShoppingCart,
  Truck,
  RefreshCw,
  Minus,
  Plus,
  CheckCircle2,
} from 'lucide-react';
import type { SizeCode } from '../../types';
import { product, formatYen } from '../../data/product';
import { SECTION_IDS } from '../../constants';
import { trackEvent } from '../../lib/analytics';
import { StarRating } from '../StarRating/StarRating';
import {
  ProductOptionSelector,
  type OptionItem,
} from '../ProductOptionSelector/ProductOptionSelector';
import styles from './ProductPurchase.module.css';

interface ProductPurchaseProps {
  colorId: string;
  onColorChange: (id: string) => void;
  size: SizeCode;
  onSizeChange: (size: SizeCode) => void;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
}

const MAX_QUANTITY = 10;

export function ProductPurchase({
  colorId,
  onColorChange,
  size,
  onSizeChange,
  quantity,
  onQuantityChange,
}: ProductPurchaseProps) {
  const [message, setMessage] = useState<string | null>(null);
  const messageTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (messageTimer.current) window.clearTimeout(messageTimer.current);
    };
  }, []);

  const colorOptions: OptionItem[] = product.colors.map((c) => ({
    value: c.id,
    label: c.label,
    swatch: c.swatch,
  }));

  const sizeOptions: OptionItem[] = product.sizes.map((s) => ({
    value: s.code,
    label: s.label,
  }));

  const selectedColorLabel =
    product.colors.find((c) => c.id === colorId)?.label ?? colorId;
  const selectionSummary = `${selectedColorLabel} / ${size}サイズ / 数量${quantity}`;

  const handleColor = (id: string) => {
    onColorChange(id);
    const label = product.colors.find((c) => c.id === id)?.label ?? id;
    trackEvent('color_select', { color: label });
  };

  const handleSize = (value: string) => {
    onSizeChange(value as SizeCode);
    trackEvent('size_select', { size: value });
  };

  const changeQuantity = (delta: number) => {
    const next = Math.min(MAX_QUANTITY, Math.max(1, quantity + delta));
    onQuantityChange(next);
  };

  const handleAddToCart = () => {
    trackEvent('add_to_cart_click', { color: selectedColorLabel, size, quantity });

    setMessage(
      `${selectedColorLabel}・${size}サイズ・数量${quantity}を選択しました。ポートフォリオ用デモのため、注文処理は行われません。`,
    );
    if (messageTimer.current) window.clearTimeout(messageTimer.current);
    messageTimer.current = window.setTimeout(() => setMessage(null), 6000);
  };

  return (
    <section
      id={SECTION_IDS.purchase}
      className="section section--tint"
      aria-labelledby="purchase-heading"
    >
      <div className="container">
        <div className={styles.card}>
          <h2 id="purchase-heading" className={styles.name} tabIndex={-1}>
            {product.name}
          </h2>

          <div className={styles.ratingRow}>
            <StarRating value={product.rating} size={16} />
            <span className={styles.ratingValue}>{product.rating.toFixed(1)}</span>
            <a href="#reviews" className={styles.reviewLink}>
              {product.reviewCount}件のレビュー
            </a>
          </div>

          <div className={styles.priceRow}>
            <span className={styles.price}>{formatYen(product.price)}</span>
            <span className={styles.tax}>（税込）</span>
          </div>

          <p className={styles.stock}>
            <CheckCircle2 width={16} height={16} aria-hidden="true" />
            在庫あり
          </p>

          <div className={styles.selectors}>
            <ProductOptionSelector
              legend="カラー"
              name="color"
              options={colorOptions}
              value={colorId}
              onChange={handleColor}
            />
            <ProductOptionSelector
              legend="サイズ"
              name="size"
              options={sizeOptions}
              value={size}
              onChange={handleSize}
            />

            <div className={styles.quantity}>
              <span className={styles.quantityLabel} id="quantity-label">
                数量
              </span>
              <div
                className={styles.quantityControl}
                role="group"
                aria-labelledby="quantity-label"
              >
                <button
                  type="button"
                  className={styles.quantityButton}
                  onClick={() => changeQuantity(-1)}
                  disabled={quantity <= 1}
                  aria-label="数量を1つ減らす"
                >
                  <Minus width={16} height={16} aria-hidden="true" />
                </button>
                <span className={styles.quantityValue} aria-live="polite">
                  {quantity}
                </span>
                <button
                  type="button"
                  className={styles.quantityButton}
                  onClick={() => changeQuantity(1)}
                  disabled={quantity >= MAX_QUANTITY}
                  aria-label="数量を1つ増やす"
                >
                  <Plus width={16} height={16} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <p className={styles.summary}>
            <span className={styles.summaryLabel}>選択中</span>
            <span className={styles.summaryValue}>{selectionSummary}</span>
          </p>

          <button
            type="button"
            className={styles.addToCart}
            onClick={handleAddToCart}
          >
            <ShoppingCart width={20} height={20} aria-hidden="true" />
            カートに入れる
          </button>

          {/* デモ用の通知（aria-live で読み上げ） */}
          <div className={styles.messageArea} role="status" aria-live="polite">
            {message && (
              <p className={styles.message}>
                <CheckCircle2 width={18} height={18} aria-hidden="true" />
                {message}
              </p>
            )}
          </div>

          <ul className={styles.info}>
            <li>
              <Truck width={18} height={18} aria-hidden="true" />
              <span>
                {formatYen(product.freeShippingThreshold)}以上のご購入で送料無料。通常2〜4日でお届けします。
              </span>
            </li>
            <li>
              <RefreshCw width={18} height={18} aria-hidden="true" />
              <span>
                未使用・タグ付きの場合、到着後7日以内はサイズ交換・返品を承ります。
              </span>
            </li>
          </ul>

          <p className={styles.demoNote}>
            本ページは、釣具ECサイトを想定して制作したポートフォリオ作品です。商品・ブランドは架空のもので、実際の販売・決済は行いません。
          </p>
        </div>
      </div>
    </section>
  );
}
