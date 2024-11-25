import React from "react";
import Header from "./Header";
import CardGrid from "./CardGrid";
import Services from "./services";
import PackageCards from "./Packages";
import Started from "./Started";
import CardShadows from "./CardShadows";
import FAQ from "./FAQ";
import Support from "./Support";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Header />
      <CardGrid />
      <CardShadows />
      <Services />
      <PackageCards />
      <Started />
      <FAQ />
      <Support />
      <Footer />
    </>
  );
};

export default App;
