import React from "react";
import Header from "./Header";
import CardGrid from "./CardGrid";
import CardShadows from "./CardShadows";
import Services from "./services";
import PackageCards from "./Packages";
import Started from "./Started";

const App = () => {
  return (
    <>
      <Header />
      <CardGrid />
      <CardShadows />
      <Services />
      <PackageCards />
      <Started />
    </>
  );
};

export default App;
