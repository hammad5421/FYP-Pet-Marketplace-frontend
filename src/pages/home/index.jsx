import { BasicLayout } from "../../layouts";

import Hero from "./Hero";
import SellPetBanner from "./Headline";
import FeatureSection from "./FeatureSection";
import Card from "./Cardsection";
import AboutComponent from "./About";

const Home = () => {
  return (
    <>
      <BasicLayout>
        <Hero />
        <SellPetBanner/>
        <FeatureSection/>
        <Card/>
        <AboutComponent/>
      </BasicLayout>
    </>
  );
};

export default Home;
