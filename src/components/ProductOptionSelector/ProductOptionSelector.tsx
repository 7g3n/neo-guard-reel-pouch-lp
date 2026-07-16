import { Check } from 'lucide-react';
import styles from './ProductOptionSelector.module.css';

export interface OptionItem {
  value: string;
  label: string;
  /** カラー選択時のスウォッチ色（任意）。 */
  swatch?: string;
  disabled?: boolean;
}

interface ProductOptionSelectorProps {
  legend: string;
  name: string;
  options: OptionItem[];
  value: string;
  onChange: (value: string) => void;
  /** 選択中の値をラベル横に表示する（例: 「カラー：Navy」）。 */
  showSelectedLabel?: boolean;
}

export function ProductOptionSelector({
  legend,
  name,
  options,
  value,
  onChange,
  showSelectedLabel = true,
}: ProductOptionSelectorProps) {
  const selected = options.find((o) => o.value === value);

  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>
        {legend}
        {showSelectedLabel && selected && (
          <span className={styles.selectedLabel}>{selected.label}</span>
        )}
      </legend>
      <div className={styles.options}>
        {options.map((option) => {
          const isSelected = option.value === value;
          const id = `${name}-${option.value}`;
          return (
            <label
              key={option.value}
              htmlFor={id}
              className={`${styles.option} ${option.swatch ? styles.swatchOption : ''} ${
                isSelected ? styles.selected : ''
              } ${option.disabled ? styles.disabled : ''}`}
            >
              <input
                type="radio"
                id={id}
                name={name}
                value={option.value}
                checked={isSelected}
                disabled={option.disabled}
                onChange={() => onChange(option.value)}
                className={styles.input}
              />
              {option.swatch && (
                <span
                  className={styles.swatch}
                  style={{ backgroundColor: option.swatch }}
                  aria-hidden="true"
                />
              )}
              <span className={styles.optionLabel}>{option.label}</span>
              {isSelected && (
                <Check
                  width={16}
                  height={16}
                  className={styles.check}
                  aria-hidden="true"
                />
              )}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
