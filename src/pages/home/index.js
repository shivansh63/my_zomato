import React, { useState } from "react";
import Delivery from "../../components/common/delivery";
import Footer from "../../components/common/footer";
import Header from "../../components/common/header";
import TabOptions from "../../components/common/tabOptions";
import DiningOut from "../../components/diningOut";
import Nightlife from "../../components/nightlife";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCprrectScreen(activeTab)}
      <Footer />
    </div>
  );
};

const getCprrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />;
    case "Dining Out":
      return <DiningOut />;
    case "Nightlife":
      return <Nightlife />;
    default:
      return <Delivery />;
  }
};

export default HomePage;
