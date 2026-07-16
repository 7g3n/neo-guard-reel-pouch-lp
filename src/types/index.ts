export type SizeCode = 'S' | 'M' | 'L';

export interface ColorOption {
  id: string;
  label: string;
  /** Swatch color shown in the selector. */
  swatch: string;
}

export interface SizeOption {
  code: SizeCode;
  label: string;
  fit: string;
  use: string;
}

export interface ProductData {
  name: string;
  catchCopy: string;
  subCopy: string;
  price: number;
  freeShippingThreshold: number;
  rating: number;
  reviewCount: number;
  colors: ColorOption[];
  sizes: SizeOption[];
}

export interface Feature {
  id: string;
  number: string;
  title: string;
  body: string;
  note?: string;
  image: string;
  alt: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  purchasedSize: SizeCode;
  body: string;
}

/** Size finder question flow */
export type ReelType = 'spinning' | 'baitcasting';

export interface SizeFinderResult {
  size: SizeCode;
  reason: string;
}
