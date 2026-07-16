/**
 * Lightweight analytics facade.
 *
 * すべてのイベントはこの1関数を経由します。将来 GA4 などに差し替える場合は
 * `dispatch` の中身のみを実装すれば、呼び出し側の変更は不要です。
 * 個人情報（氏名・メール・住所など）は payload に含めないでください。
 */

export type AnalyticsEvent =
  | 'hero_cta_click'
  | 'size_finder_start'
  | 'size_finder_complete'
  | 'color_select'
  | 'size_select'
  | 'add_to_cart_click'
  | 'faq_open'
  | 'sticky_cta_click';

/** 非個人情報の軽量な付帯情報のみを許可する型。 */
export type AnalyticsPayload = Record<string, string | number | boolean>;

const isDev = import.meta.env.DEV;

function dispatch(event: AnalyticsEvent, payload?: AnalyticsPayload): void {
  // 本番では下記を GA4 (gtag) や自前エンドポイントへの送信に差し替えます。
  // 例: window.gtag?.('event', event, payload);
  if (isDev) {
    // 開発時のみ、イベント名と最小限の情報をコンソールへ出力。
    // eslint-disable-next-line no-console
    console.info(`[analytics] ${event}`, payload ?? {});
  }
}

export function trackEvent(
  event: AnalyticsEvent,
  payload?: AnalyticsPayload,
): void {
  dispatch(event, payload);
}
