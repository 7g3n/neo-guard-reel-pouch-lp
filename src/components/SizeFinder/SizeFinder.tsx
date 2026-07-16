import { useState } from 'react';
import { RotateCcw, ArrowRight } from 'lucide-react';
import type { ReelType, SizeCode } from '../../types';
import {
  baitSizes,
  resolveSize,
  spinningSizes,
  type ReelSizeId,
} from '../../lib/sizeFinder';
import { trackEvent } from '../../lib/analytics';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import styles from './SizeFinder.module.css';

interface SizeFinderProps {
  /** 診断結果のサイズを購入エリアへ反映し、スクロールする。 */
  onSelectSize: (size: SizeCode) => void;
}

type Step = 1 | 2 | 3;

export function SizeFinder({ onSelectSize }: SizeFinderProps) {
  const [step, setStep] = useState<Step>(1);
  const [reelType, setReelType] = useState<ReelType | null>(null);
  const [started, setStarted] = useState(false);

  const [result, setResult] = useState<{ size: SizeCode; reason: string } | null>(
    null,
  );

  const beginIfNeeded = () => {
    if (!started) {
      setStarted(true);
      trackEvent('size_finder_start');
    }
  };

  const handleReelType = (type: ReelType) => {
    beginIfNeeded();
    setReelType(type);
    setStep(2);
  };

  const handleReelSize = (sizeId: ReelSizeId) => {
    if (!reelType) return;
    const resolved = resolveSize(reelType, sizeId);
    setResult(resolved);
    setStep(3);
    trackEvent('size_finder_complete', { size: resolved.size });
  };

  const reset = () => {
    setStep(1);
    setReelType(null);
    setResult(null);
  };

  const sizeOptions = reelType === 'spinning' ? spinningSizes : baitSizes;

  return (
    <section id="size-finder" className="section" aria-labelledby="finder-heading">
      <div className="container">
        <SectionHeading
          eyebrow="SIZE FINDER"
          title="かんたんサイズ診断"
          description="2つの質問に答えると、お使いのリールに合うサイズの目安をご案内します。"
          align="center"
          id="finder-heading"
        />

        <div className={styles.panel}>
          <ol className={styles.progress} aria-hidden="true">
            {[1, 2, 3].map((n) => (
              <li
                key={n}
                className={`${styles.progressStep} ${
                  step >= n ? styles.progressActive : ''
                }`}
              >
                {n}
              </li>
            ))}
          </ol>

          {/* aria-live で結果の変化を読み上げる */}
          <div aria-live="polite">
            {step === 1 && (
              <fieldset className={styles.fieldset}>
                <legend className={styles.legend}>
                  質問1：使用しているリールの種類は？
                </legend>
                <div className={styles.options}>
                  <button
                    type="button"
                    className={styles.optionButton}
                    onClick={() => handleReelType('spinning')}
                  >
                    スピニングリール
                  </button>
                  <button
                    type="button"
                    className={styles.optionButton}
                    onClick={() => handleReelType('baitcasting')}
                  >
                    ベイトリール
                  </button>
                </div>
              </fieldset>
            )}

            {step === 2 && (
              <fieldset className={styles.fieldset}>
                <legend className={styles.legend}>
                  質問2：リールの大きさは？
                </legend>
                <div className={styles.options}>
                  {sizeOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      className={styles.optionButton}
                      onClick={() => handleReelSize(opt.id)}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  className={styles.backButton}
                  onClick={() => setStep(1)}
                >
                  ← 種類の選択に戻る
                </button>
              </fieldset>
            )}

            {step === 3 && result && (
              <div className={styles.result}>
                <p className={styles.resultLabel}>おすすめサイズ</p>
                <p className={styles.resultSize}>{result.size}</p>
                <p className={styles.resultReason}>{result.reason}</p>
                <div className={styles.resultActions}>
                  <button
                    type="button"
                    className={styles.selectButton}
                    onClick={() => onSelectSize(result.size)}
                  >
                    このサイズを選択する
                    <ArrowRight width={18} height={18} aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className={styles.resetButton}
                    onClick={reset}
                  >
                    <RotateCcw width={16} height={16} aria-hidden="true" />
                    もう一度診断する
                  </button>
                </div>
                <p className={styles.resultNote}>
                  ※リールの形状によってフィット感が異なる場合があります。目安としてご参照ください。
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
