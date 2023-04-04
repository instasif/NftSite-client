import React from "react";
import Hero from "../../Componants/Hero/Hero";
import TodaysPic from "../../Componants/TodaysPic/TodaysPic";
import LiveActions from "../../Componants/LiveActions/LiveActions";
import CreateAndSellYourNFTs from "../../Componants/Create and Sell Your NFT/CreateAndSellYourNFTs";
import PopularCollections from "../../Componants/Popular Collection/PopularCollections";
import TopSellers from "../../Componants/Top Seller/TopSellers";

const Home = () => {
  return (
    <div>
      <Hero />
      <LiveActions />
      <TopSellers />
      <TodaysPic />
      <PopularCollections />
      <CreateAndSellYourNFTs />
    </div>
  );
};

export default Home;
