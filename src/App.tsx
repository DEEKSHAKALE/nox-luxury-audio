import { useState, useEffect } from "react";
import { PageLayout } from "./components/layout/PageLayout";
import { Hero } from "./components/sections/Hero";
import { PremiumFeatureSplit } from "./components/sections/PremiumFeatureSplit";
import { ExplodedView } from "./components/sections/ExplodedView";
import { FeatureGrid } from "./components/sections/FeatureGrid";
import { Tech } from "./components/sections/Tech";
import { Cta } from "./components/sections/Cta";
import  Loader from "./components/sections/Loader";

export default function App() {
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2500);

  return () => clearTimeout(timer);
}, []);
  return (
    <>
     {/* loading && <Loader /> */}
    <PageLayout>
      <Hero />
      
      <PremiumFeatureSplit />
      <ExplodedView />
      <FeatureGrid />
      <Tech />
      <Cta />
      
    </PageLayout>
    </>
  );
}


