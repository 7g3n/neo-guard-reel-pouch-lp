import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '../../data/faq';
import { SECTION_IDS } from '../../constants';
import { trackEvent } from '../../lib/analytics';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import styles from './FAQ.module.css';

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((current) => {
      const next = current === id ? null : id;
      if (next === id) {
        trackEvent('faq_open', { id });
      }
      return next;
    });
  };

  return (
    <section
      id={SECTION_IDS.faq}
      className="section section--tint"
      aria-labelledby="faq-heading"
    >
      <div className="container">
        <SectionHeading
          eyebrow="FAQ"
          title="よくあるご質問"
          align="center"
          id="faq-heading"
        />

        <div className={styles.list}>
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            const buttonId = `faq-button-${item.id}`;
            const panelId = `faq-panel-${item.id}`;
            return (
              <div key={item.id} className={styles.item}>
                <h3 className={styles.questionHeading}>
                  <button
                    type="button"
                    id={buttonId}
                    className={styles.question}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(item.id)}
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      width={20}
                      height={20}
                      aria-hidden="true"
                      className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={styles.panel}
                  hidden={!isOpen}
                >
                  <p className={styles.answer}>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
