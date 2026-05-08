import { PageLayout } from "./components/layout/PageLayout";
import { Hero } from "./components/sections/Hero";
import { PremiumFeatureSplit } from "./components/sections/PremiumFeatureSplit";
import { ExplodedView } from "./components/sections/ExplodedView";
import { FeatureGrid } from "./components/sections/FeatureGrid";
import { Tech } from "./components/sections/Tech";
import { Cta } from "./components/sections/Cta";


export default function App() {
  return (
    <PageLayout>
      <Hero />
      
      <PremiumFeatureSplit />
      <ExplodedView />
      <FeatureGrid />
      <Tech />
      <Cta />
      
    </PageLayout>
  );
}

