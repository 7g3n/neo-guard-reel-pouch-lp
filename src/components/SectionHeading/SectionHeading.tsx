import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  /** レンダリングする見出しレベル（ページ内で h1 は Hero のみ）。 */
  as?: 'h2' | 'h3';
  id?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  as: Tag = 'h2',
  id,
}: SectionHeadingProps) {
  return (
    <div
      className={styles.wrap}
      data-align={align}
    >
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <Tag className={styles.title} id={id}>
        {title}
      </Tag>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
