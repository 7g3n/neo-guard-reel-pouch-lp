import { useState } from 'react';
import type { SizeCode } from './types';
import { colors } from './data/product';
import { SECTION_IDS } from './constants';
import { scrollToId } from './lib/scroll';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { ProblemSection } from './components/ProblemSection/ProblemSection';
import { FeatureSection } from './components/FeatureSection/FeatureSection';
import { BeforeAfter } from './components/BeforeAfter/BeforeAfter';
import { SizeFinder } from './components/SizeFinder/SizeFinder';
import { SizeTable } from './components/SizeTable/SizeTable';
import { HowToUse } from './components/HowToUse/HowToUse';
import { ProductPurchase } from './components/ProductPurchase/ProductPurchase';
import { Reviews } from './components/Reviews/Reviews';
import { FAQ } from './components/FAQ/FAQ';
import { FinalCTA } from './components/FinalCTA/FinalCTA';
import { Footer } from './components/Footer/Footer';
import { MobileStickyCTA } from './components/MobileStickyCTA/MobileStickyCTA';

export default function App() {
  const [colorId, setColorId] = useState<string>(colors[0].id);
  const [size, setSize] = useState<SizeCode>('M');
  const [quantity, setQuantity] = useState<number>(1);

  const handleSelectSizeFromFinder = (recommended: SizeCode) => {
    setSize(recommended);
    scrollToId(SECTION_IDS.purchase);
    // 購入エリアの見出しへフォーカスを移す（preventScroll でスムーズスクロールを妨げない）
    document.getElementById('purchase-heading')?.focus({ preventScroll: true });
  };

  return (
    <>
      <a href="#main" className="skip-link">
        本文へスキップ
      </a>
      <Header />
      <main id="main">
        <Hero />
        <ProblemSection />
        <FeatureSection />
        <BeforeAfter />
        <SizeFinder onSelectSize={handleSelectSizeFromFinder} />
        <SizeTable />
        <HowToUse />
        <ProductPurchase
          colorId={colorId}
          onColorChange={setColorId}
          size={size}
          onSizeChange={setSize}
          quantity={quantity}
          onQuantityChange={setQuantity}
        />
        <Reviews />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
